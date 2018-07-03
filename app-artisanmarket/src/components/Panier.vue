<template>
    <v-container>
        <v-layout>
            <v-flex offset-sm2>
        <h2>Votre panier ({{nbPanier}})</h2>
        <v-layout row v-for="article in articles" :key="article.id">
            <v-flex xs12 sm10>
            <v-card>
              <v-container fluid grid-list-lg>
                <v-layout row>
                  <v-flex xs12 sm7>
                    <div>
                      <div class="headline">{{article.nomArticle}}</div>
                      <div>{{article.descriptionArticle}}</div>
                      <div>{{article.prix}} €</div>
                      <v-btn>
                        <v-icon left>cancel</v-icon>Supprimer l'article
                      </v-btn>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm5>
                    <v-card-media
                      :src="article.img"
                      height="125px"
                      contain
                    ></v-card-media>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
        </v-layout>
        </v-flex>
        </v-layout>
    </v-container>
</template>
<script>
export default {
    computed: {
        nbPanier() {
            return this.$store.getters.nbArticlesPanier
        },
        articles() {
            return this.$store.getters.articlesPanier
        }
    }
}
</script>
<style lang="scss" scoped>
.v-btn{
    background-color: #FFB6B9 !important;
    color: white;
}
.v-card {
    margin-top: 2rem;
}
</style>

