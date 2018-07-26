<template>
  <v-container>
      <h2>Mon profil</h2>
      <div class="input-form">
        <p>Prenom</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.name"
          solo
        ></v-text-field>
      </div>
      <div class="input-form">
        <p>Email</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.email"
          solo
        ></v-text-field>
      </div>
      <div class="input-form">
        <p>Description</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.description"
          solo
        ></v-text-field>
      </div>
      <div class="input-form">
        <p>Photo de profil</p>
        <v-text-field
          placeholder="Placeholder"
          v-model="artisan.img"
          solo
        ></v-text-field>
        <img :src="artisan.img" alt="">
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
  }
}
</script>
<style lang="scss">

</style>
