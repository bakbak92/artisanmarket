<template>
  <v-container fluid>
      <h1 style="color: #FFB6B9">Artisan Market</h1>
      <p>La market space des artisans</p>
      <v-carousel>
        <v-carousel-item
          v-for="(item,i) in articles"
          :key="i"
          :src="item.img"
          height="400px"
          reverse-transition="fade"
          transition="fade"
        ></v-carousel-item>
      </v-carousel>
  </v-container>
</template>
<script>
export default {
  computed: {
    articles() {
      return this.$store.getters.articles
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2, p {
  font-weight: normal;
  text-align: center;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
