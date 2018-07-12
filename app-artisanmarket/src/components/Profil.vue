<template>
    <v-container>
      <div v-show="notReady">
        <div class="form" v-show="connection">
          <h2>
            Connecte toi
          </h2>
          <div class="form-input">
            <v-text-field
                placeholder="Adresse email "
                v-model="arti.email"
                solo
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                placeholder="Mot de passe "
                solo
                v-model="arti.mdp"
              ></v-text-field>
              <span style="cursor: pointer">Mot de passe oublié?</span>
          </div>
          <div class="form-input">
            <v-btn @click="signInArtisan">
              SE CONNECTER
            </v-btn>
            <p class="link-signup">Ou <span @click="connection = false">s'incrire ici</span>, en 5 secondes c'est fait :) </p>
          </div>
        </div>
        <div v-show="!connection" class="form">
          <h2>Incris toi en quelque clics</h2>
          <div class="form-input">
            <v-text-field
                placeholder="Nom"
                solo
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                placeholder="Prenom"
                solo
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                placeholder="Adresse email"
                solo
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                placeholder="Mot de passe"
                solo
              ></v-text-field>
          </div>
          <div class="form-input">
            <v-text-field
                placeholder="Confirmer le mot de passe"
                solo
              ></v-text-field>
              <v-switch
              label="Etes vous un artisan ?"
              v-model="artisan"
              color="secondary"
            ></v-switch>
          </div>
          <div class="form-input">
            <v-btn>
              S'INSCRIRE
            </v-btn>
          </div>
        </div>
      </div>
      <div v-show="!notReady">
        Vous etes bien connecter consulter vos article
      </div>
    </v-container>
</template>
<script>
export default {
  data(){
    return {
      connection: true,
      switch1: true,
      artisan: false,
      arti: {
        email: '',
        mdp: ''
      },
      notReady: true
    }
  },
  methods: {
    signInArtisan(){
      axios.get(`http://localhost:3000/signinartisan/${this.arti.email}/${this.arti.mdp}`)
          .then((response) => {

            if(response.data[0].email_artisan !== this.arti.email && response.data[0].password !== this.arti.mp)
            this.arti = response.data[0]
            this.$store.dispatch('signInArtisan', this.arti)
            console.log(this.arti)
            console.log('connecter' + response.data[0].email_artisan)
            this.notReady = false
            /*this.arti.email = ''
            this.arti.mdp = ''*/
          })
          .catch((err) => {
            console.log('error' + err)
          })

      /*this.arti.email = ''
      this.arti.mdp = ''*/
    },
    signup(){
      if(artisan === true){
        axios.post('http://localhost:3000/signupartisan', {})
        .then((response) => {
          console.log(response.data)
        })
        .catch((err) => {
          console.log(err)
        })
      }
      else{
        axios.post('http://localhost:3000/signupartisan', {})
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
      }
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
