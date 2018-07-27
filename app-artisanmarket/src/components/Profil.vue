<template>
  <v-container>
      <h2>Mon profil</h2>
      <div class="input-form">
        <p>Prenom</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.prenom_artisan"
          solo
        ></v-text-field>
      </div>
      <div class="input-form">
        <p>Email</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.email_artisan"
          solo
        ></v-text-field>
      </div>
      <div class="input-form">
        <p>Description</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.description_artisan"
          solo
        ></v-text-field>
      </div>
      <div class="input-form">
        <p>Photo de profil</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.photo_artisan"
          solo
        ></v-text-field>
        <img :src="artisan.photo_artisan" alt="">
      </div>
      <div class="input-form">
        <v-btn @click="edit">
          Modifier profil
        </v-btn>
      </div>
  </v-container>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  computed: {
    artisan(){
      return this.$store.getters.artisan
    }
  },
  methods:{
    edit(){
      axios.put('http://localhost:3000/editartisan', this.artisan)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>
<style lang="scss">

</style>
