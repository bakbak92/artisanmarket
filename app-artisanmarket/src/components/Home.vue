<template>
  <v-container fluid>
      <h1 style="color: #99e1e5">Artisan Market</h1>
      <p>La market space des artisans</p>
      <v-carousel delimiter-icon="fiber_manual_record"
    prev-icon="chevron_left"
    next-icon="chevron_right">
        <v-carousel-item
          v-for="(item,i) in articles"
          :key="i"
          :src="item"
          height="400px"
        ></v-carousel-item>
      </v-carousel>
  </v-container>
</template>
<script>
export default {
  data(){
    return {
      articles: [
        "https://images.unsplash.com/photo-1494281232141-90a40b0b06c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d66710bd126434e4c50af9b1dbc55d5&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1507904862046-46e6e3661508?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0efe856edefb24e3274b92af1f9ad661&auto=format&fit=crop&w=750&q=80",
        "https://images.unsplash.com/photo-1524485566422-75cf178c59d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41ed2cfdd37cc5f6ab09950036780451&auto=format&fit=crop&w=750&q=80"
      ]
    }
  },
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
