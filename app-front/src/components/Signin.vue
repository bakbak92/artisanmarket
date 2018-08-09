<template>
    <v-container>
      <div>
        <v-form v-show="!connecter" class="form">
          <h2>
            Connecte toi
          </h2>
          <div class="form-input">
            <v-text-field
                placeholder="Adresse email "
                v-model="artisanSignin.email_artisan"
                solo
                :rules="rules.email"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                placeholder="Mot de passe "
                solo
                v-model="artisanSignin.password_artisan"
                :rules="rules.mdp"
                type="password"
                required
              ></v-text-field>
              <span style="cursor: pointer">Mot de passe oublié?</span>
          </div>
          <div class="form-input">
            <v-btn :disabled="!signInValid" @click="signInArtisan">
              SE CONNECTER
            </v-btn>
            <p v-if="error.isError" class="error-connection">{{error.text}}</p>
            <p class="link-signup">Ou <a href="http://localhost:8080/#/Signup">s'incrire ici</a>, en 5 secondes c'est fait :) </p>
          </div>
        </v-form>
        <div v-show="connecter">
          Vous êtes bien connecter
        </div>
      </div>
    </v-container>
</template>
<script>
export default {
  data(){
    return {
      connection: true,
      artisanSignin: {
        email_artisan: '',
        password_artisan: '',
        id_artisan: ''
      },
      connecter: false,
      rules: {
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
        this.artisanSignin.email_artisan &&
        this.artisanSignin.password_artisan
      )
    }
  },
  methods: {
    signInArtisan(){
      axios.get(`http://localhost:3000/signinartisan/${this.artisanSignin.email_artisan}/${this.artisanSignin.password_artisan}`)
          .then((response) => {

            /*if(response.data[0].email_artisan !== this.artisanSignin.email && response.data[0].password !== this.artisanSignin.mdp){

            }*/
            console.log(response.data)
            this.connecter = true
            this.$store.dispatch('signInArtisan', response.data[0])

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
