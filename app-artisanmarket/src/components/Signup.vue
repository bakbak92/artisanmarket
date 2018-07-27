<template>
    <v-container>
      <div>
        <v-form v-show="!incris" @submit.prevent="signup" class="form">
          <h2>Incris toi en quelque clics</h2>
          <div class="form-input">
            <v-text-field
                v-model="userSignUp.prenom_artisan"
                placeholder="Prenom"
                solo
                :rules="rules.prenom_artisan"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                v-model="userSignUp.email_artisan"
                placeholder="Adresse email"
                type="email"
                solo
                :rules="rules.email_artisan"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                v-model="userSignUp.password_artisan"
                placeholder="Mot de passe"
                type="password"
                solo
                :rules="rules.password_artisan"
                required
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-btn :disabled="!signUpValid" @click="signup">
              S'INSCRIRE
            </v-btn>
          </div>
        </v-form>
        <div v-show="incris">
          <h2>Vous ete maintenant inscris <a href="http:/localhost:8080/#/Signin">connectez-vous </a></h2>
        </div>
      </div>
    </v-container>
</template>
<script>
export default {
  data(){
    return {
      userSignUp: {
        prenom_artisan: '',
        email_artisan: '',
        password_artisan: ''
      },
      rules: {
        prenom_artisan: [val => (val || '').length > 0 || 'Entre ton prenom'],
        email_artisan: [val => (val || '').length > 0 || 'Entre ton email'],
        password_artisan: [val => (val || '').length > 0 || 'Entre ton mot de passe']
        },
      error: {isError: false, text: ''},
      inscris: false
    }
  },
  computed:{
    signUpValid(){
      return (
        this.userSignUp.prenom_artisan &&
        this.userSignUp.email_artisan &&
        this.userSignUp.password_artisan
      )
    }
  },
  methods: {
    signup(){
      axios.post('http://localhost:3000/signupartisan', {
        prenom_artisan: this.userSignUp.prenom_artisan,
        description_artisan: this.userSignUp.description,
        email_artisan: this.userSignUp.email_artisan,
        password_artisan: this.userSignUp.password_artisan,
        photo_artisan: this.userSignUp.photo_artisan,

      })
      .then((response) => {
        console.log(response.data)
        this.inscris = true

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
