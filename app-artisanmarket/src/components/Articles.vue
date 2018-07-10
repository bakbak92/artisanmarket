<template>
    <v-container>
        <h2 @click="getArticles">Articles</h2>
        <div>
            <div class="articles" v-for="article in articles" :key="article.id" @click="viewArticle(article)">
                <v-card>
                    <v-card-media
                    :src="article.image_article"
                    height="200px"
                    ></v-card-media>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{article.nom_article}}</h3>
                        <div>{{article.description_article}}</div>
                        <span class="grey--text">{{article.prix_article}} €</span>
                    </div>
                    </v-card-title>
                </v-card>
            </div>
        </div>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    data(){
      return {
      }
    },
    created(){
        this.$store.dispatch('getArticles')
    },
    computed: {
        articles(){
            return this.$store.getters.articles
        }
    },
    methods: {
        /*addArticle(article) {
            const product = {
                id: article.id,
                nom_article: article.nom_article,
                description_article: article.description_article,
                image_article: article.image_article,
                prix_article: article.prix_article
            }
            console.log(product)
            this.$store.dispatch('addArticlesPanier', product)
        },*/
        getArticles(){
            this.$store.dispatch('getArticles')
        },
        viewArticle(article){
          this.$router.push(`/Article/${article.id}`)
          this.$store.dispatch('getArticle', article)
        },
    }
}
</script>

<style lang="scss" scoped>
.v-card{
    margin-right: 2rem;
    @media screen and (max-width: 550px) {
        margin-right: 0;
    }
    .v-card__actions{
        padding: 0;
    }
}
.v-btn{
    background-color: #FFB6B9!important;
    color: white;
    width: 100%;
}
.articles{
    width: 33.33%;
    float: left;
    margin: 1rem 0;
    cursor: pointer;
    @media screen and (max-width: 550px) {
        width: 100%;
        margin-bottom: 1.5rem;
    }
}
</style>
