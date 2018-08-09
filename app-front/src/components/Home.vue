<template>
  <div class="container-home">
    <div class="first-block">
      <div class="title">
        <h1>Artisan Market</h1>
        <p>La market space des artisans</p>
        <div>
          <v-btn>
            Voir nos articles
          </v-btn>
        </div>
      </div>
    </div>
      <!--<v-carousel delimiter-icon="fiber_manual_record"
    prev-icon="chevron_left"
    next-icon="chevron_right">
        <v-carousel-item
          v-for="(item,i) in articles"
          :key="i"
          :src="item"
          height="400px"
        ></v-carousel-item>
      </v-carousel>-->
      <div class="second-block">
        <div class="presentation">
          <div class="text-presentation">
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div class="content-btn">
              <v-btn>
                Voir nos offres
              </v-btn>
            </div>
          </div>
        </div>
        <div class="presentation">
          <div class="text-presentation">
            <p>Lorem ipsum dolor sit amet consectetur</p>
            <div class="content-btn">
              <v-btn>
                Voir nos offres
              </v-btn>
            </div>
          </div>
        </div>
      </div>
  </div>
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
<style lang="scss" scoped>
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
.content-block{
  overflow: hidden;
}
.block {
  width: 50%;
  float: left;
  padding: 2rem 0;
  overflow: hidden;
}
.first-block{
  background: url("../assets/photo-1499744632587-7798360ba20f.jpg");
  background-size: cover!important;
  height: 350px;
  overflow: hidden;
  margin-top: 3rem;
  .title{
    color: white;
    padding-top: 8rem;
    div{
      text-align: center;
      .v-btn{
        background-color: #7c73e6;
        color: white;
      }
    }
  }
}
.second-block{
  overflow: hidden;
  margin-top: 3rem;
  .presentation{
    &:first-child{
      height: 600px;
      width: 48.5%;
      margin-right: 3%;
      float: left;
      background-size: cover!important;
      background: url(https://images.unsplash.com/photo-1527275393322-8ddae8bd5de9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1ae3ab00a5ee207ef22bb519cbb4c3f5&auto=format&fit=crop&w=800&q=80);
    }
    height: 600px;
    background: url(https://images.unsplash.com/photo-1514542256430-d2852713eda4?ixlib=rb-0.3.5&s=a50f630…&auto=format&fit=crop&w=334&q=80);
    background-size: cover!important;
    width: 48.5%;
    float: left;
    position: relative;
    @media screen and (max-width: 550px) {
      width: 100%!important;
      margin-right: 0!important;
      &:first-child{
        margin-bottom: 2rem;
      }
    }
    .text-presentation{
      position: absolute;
      bottom: 50px;
      left: 0;
      right: 0;
      display: block;
      p{
        color: white;
        font-weight: 500;
        font-size: 18px;
      }
      .content-btn{
        text-align: center;
        .v-btn{
          background-color: #7c73e6!important;
          color: white;
        }
      }
    }
  }
}
.container-home{
  max-width: 1000px;
  margin: 3rem auto;
  padding: 0 2rem;
}
</style>
