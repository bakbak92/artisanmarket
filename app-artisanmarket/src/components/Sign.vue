<template>
    <v-container>
      <div v-show="connecté">
        <v-form class="form" v-show="connection">
          <h2>
            Connecte toi
          </h2>
          <div class="form-input">
            <v-text-field
                placeholder="Adresse email "
                v-model="artisanSignin.email"
                solo
                :rules="rules.email"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                placeholder="Mot de passe "
                solo
                v-model="artisanSignin.mdp"
                :rules="rules.mdp"
                type="password"
                required
              ></v-text-field>
              <span style="cursor: pointer">Mot de passe oublié?</span>
          </div>
          <div class="form-input">
            <v-btn :disabled="!signUpValid" @click="signInArtisan">
              SE CONNECTER
            </v-btn>
            <p v-if="error.isError" class="error-connection">{{error.text}}</p>
            <p class="link-signup">Ou <span @click="connection = false">s'incrire ici</span>, en 5 secondes c'est fait :) </p>
          </div>
        </v-form>
        <v-form @submit.prevent="signup" v-show="!connection" class="form">
          <h2>Incris toi en quelque clics</h2>
          <div class="form-input">
            <v-text-field
                v-model="userSignUp.nom"
                placeholder="Nom"
                solo
                :rules="rules.nom"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                v-model="userSignUp.prenom"
                placeholder="Prenom"
                solo
                :rules="rules.prenom"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                v-model="userSignUp.email"
                placeholder="Adresse email"
                type="email"
                solo
                :rules="rules.email"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                v-model="userSignUp.mdp"
                placeholder="Mot de passe"
                type="password"
                solo
                :rules="rules.mdp"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-btn :disabled="!signInValid" @click="signup">
              S'INSCRIRE
            </v-btn>
          </div>
        </v-form>
      </div>
      <div v-show="!connecté">
        Vous etes bien connecter consulter vos article
      </div>
    </v-container>
</template>
<script>
export default {
  data(){
    return {
      connection: true,
      artisanSignin: {
        email: '',
        mdp: '',
        id_artisan: ''
      },
      userSignUp: {
        nom: '',
        prenom: '',
        email: '',
        mdp: ''
      },
      connecté: true,
      inscri: true,
      rules: {
        nom: [val => (val || '').length > 0 || 'Entre ton nom'],
        prenom: [val => (val || '').length > 0 || 'Entre ton prenom'],
        email: [val => (val || '').length > 0 || 'Entre ton email'],
        mdp: [val => (val || '').length > 0 || 'Entre ton mot de passe']
        },
      error: {isError: false, text: ''}
    }
  },
  computed:{
    signInValid(){
      return (
        this.userSignUp.nom &&
        this.userSignUp.prenom &&
        this.userSignUp.email &&
        this.userSignUp.mdp
      )
    },
    signUpValid(){
      return (
        this.artisanSignin.email &&
        this.artisanSignin.mdp
      )
    }
  },
  methods: {
    signInArtisan(){
      axios.get(`http://localhost:3000/signinartisan/${this.artisanSignin.email}/${this.artisanSignin.mdp}`)
          .then((response) => {

            /*if(response.data[0].email_artisan !== this.artisanSignin.email && response.data[0].password !== this.artisanSignin.mdp){

            }*/
            console.log(response.data[0])
            this.$store.dispatch('signInArtisan', response.data[0])
            this.connecté = false
          })
          .catch((err) => {
            console.log('error' + err)
            this.error = {
              isError: true,
              text: "Nom d'utilisateur et/ou mot de passe invalide(s)"
            }
          })

      /*this.arti.email = ''
      this.arti.mdp = ''*/
    },
    signup(){
      axios.post('http://localhost:3000/signupartisan', {
        nom_artisan: this.userSignUp.nom,
        prenom_artisan: this.userSignUp.prenom,
        description_artisan: this.userSignUp.description,
        email_artisan: this.userSignUp.email,
        password_artisan: this.userSignUp.mdp,
        photo_artisan: this.userSignUp.photo_artisan,

      })
      .then((response) => {
        console.log(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">
  .form{
    max-width: 600px;
    margin: auto;
    h2{
      margin-bottom: 2rem;
      text-align: center;
    }
    .v-btn{
      width: 100%;
      margin: 6px 0;
    }
    .error-connection{
      color: #e2434b;
    }
    .link-signup{
      margin: 1rem 0;
      text-align: center;
      span{
        cursor: pointer;
        font-weight: 600;
      }
    }
  }
</style>
