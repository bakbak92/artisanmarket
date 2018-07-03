<template>
    <v-container>
        <h2>Articles</h2>
        <v-layout row>
            <v-flex xs12 sm4 v-for="article in articles" :key="article.id">
                <v-card>
                    <v-card-media
                    :src="article.img"
                    height="200px"
                    ></v-card-media>

                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0">{{article.nomArticle}}</h3>
                        <div>{{article.descriptionArticle}}</div>
                        <span class="grey--text">{{article.prix}} €</span>
                    </div>
                    </v-card-title>

                    <v-card-actions>
                    <v-btn flat @click="addArticle(article)">Ajouter aux panier</v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    computed: {
        articles(){
            return this.$store.getters.articles
        }
    },
    methods: {
        addArticle(article) {
            const product = {
                id: article.id,
                nomArticle: article.nomArticle,
                descriptionArticle: article.descriptionArticle,
                img: article.img,
                prix: article.prix
            }
            console.log(product)
            this.$store.dispatch('addArticlesPanier', product)
        }
    }
}
</script>

<style lang="scss" scoped>
.v-card{
    margin-right: 1rem;
}
.v-btn{
    background-color: #FFB6B9!important;
    color: white;
    width: 100%;
}
</style>
