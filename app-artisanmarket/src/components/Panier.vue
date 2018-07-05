<template>
    <v-container>
        <div>
            <div class="articles">
            <h2>Votre panier ({{nbPanier}})</h2>
            <div v-for="article in articles" :key="article.date">
                <div>
                    <v-card>
                        <v-container fluid grid-list-lg>
                            <div row>
                                <div class="info-article">
                                    <div>
                                    <div class="headline">{{article.nom_article}}</div>
                                    <div>{{article.description_article}}</div>
                                    <div>{{article.prix_article}} €</div>
                                    <v-btn class="btn-cancel">
                                        <v-icon left>cancel</v-icon>Supprimer l'article
                                    </v-btn>
                                    </div>
                                </div>
                                <div>
                                    <v-card-media
                                    :src="article.image_article"
                                    height="125px"
                                    contain
                                    ></v-card-media>
                                </div>
                            </div>
                        </v-container>
                    </v-card>
                </div>
            </div>
        </div>
        <div class="total">
            <div>Code promo ?</div>
                <v-text-field
                label="Code promo"
                solo
            ></v-text-field>
            <h3>Récapitulatif</h3>
            <p>Total articles: {{total}}€</p>
            <p>Réduction: 0 €</p>
            <h3>total {{total}} €</h3>
        </div>
        </div>
    </v-container>
</template>
<script>
export default {
    data () {
        return {
            totalpan: 0
        }
    },
    computed: {
        nbPanier() {
            return this.$store.getters.nbArticlesPanier
        },
        articles() {
            return this.$store.getters.articlesPanier
        },
        total() {
            return this.$store.getters.totalPanier
        }
    }
}
</script>
<style lang="scss" scoped>
.btn-cancel{
    background-color: #FFB6B9 !important;
    color: white;
}
.v-card {
    margin-top: 2rem;
}
.articles{
    width: 60%;
    float: left;
    margin-bottom: 2rem;
    .info-article{
        float: left;
    }
    .v.btn{
        margin: 6px 0;
    }
}
.total{
    width: 40%;
    float: left;
    padding: 2rem;
}
</style>

