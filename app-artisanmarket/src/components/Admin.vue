<template>
    <v-container>
        <div>
            <div>
                <v-btn color="primary" @click="ajoutArticle = true">Ajouter un article <v-icon>add</v-icon></v-btn>
            </div>
            <div class="form" v-if="ajoutArticle">
                <v-form>
                    <v-text-field
                    label="nom article"
                    v-model="article.nom_article"
                    required>

                    </v-text-field>
                    <v-text-field
                    label="description article"
                    v-model="article.description_article"
                    required>

                    </v-text-field>
                    <v-text-field
                    label="prix article"
                    v-model="article.prix_article"
                    required>

                    </v-text-field>
                    <v-text-field
                    label="image article"
                    v-model="article.image_article"
                    required>

                    </v-text-field>
                </v-form>
                <div>
                    <v-btn @click="addArticle">
                        valider l'ajout
                    </v-btn>
                </div>
            </div>
        </div>
        <div class="articles" v-for="article in articles" :key="article.id">
            <v-card>
                <v-card-media v-if="!article.modeEdit"
                class="white--text"
                height="200px"
                :src="article.image_article"
                >
                    <v-container fill-height fluid>
                        <v-layout fill-height>
                        <v-flex xs12 align-end flexbox class="content-icon">
                            <span class="edit"><v-icon @click.stop="article.modeEdit = true">edit</v-icon></span>
                            <span class="delete"><v-icon @click.stop="deleteArticle(article.id)">delete</v-icon></span>
                        </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-media>
                <v-card-title v-if="!article.modeEdit">
                    <div>
                        <span class="grey--text">{{article.nom_article}}</span><br>
                        <span>{{article.description_article}}</span><br>
                        <span>{{article.prix_article}} €</span>
                    </div>
                </v-card-title>
                 <v-form v-if="article.modeEdit" ref="form" lazy-validation>
                    <v-text-field
                    v-model="article.nom_article"
                    label="Nom de l'article"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="article.description_article"
                    label="Description de l'article"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="article.prix_article"
                    label="Prix de l'article"
                    required
                    ></v-text-field>
                    <v-text-field
                    v-model="article.image_article"
                    label="Image de l'article"
                    required
                    ></v-text-field>
                    <img :src="article.image_article" height="100px" alt="">
                    <div>
                        <v-btn @click="edit(article)"
                    >
                    Modifier
                    </v-btn>
                    <v-btn @click="article.modeEdit = false">Annuler</v-btn>
                    </div>
                </v-form>
            </v-card>
        </div>

    </v-container>
</template>
<script>
import axios from 'axios'

export default {
    data() {
        return {
            dialog: false,
            article: {
                nom_article: '',
                description_article: '',
                prix_article: 0,
                image_article: ''
            },
            ajoutArticle: false
        }
    },
    created(){
      this.$store.dispatch('getArticles')
    },
    computed: {
        articles() {
            return this.$store.getters.articles
        },
    },
    methods: {
        edit(article) {
            axios.put('http://localhost:3000/updatearticle', {
                id: article.id,
                nom_article: article.nom_article,
                description_article: article.description_article,
                prix_article: article.prix_article,
                image_article: article.image_article
            })
            .then((response) => {
                console.log(response)
                article.modeEdit = false
            })
            .catch((err) => {
                console.log(err)
            })
        },
        deleteArticle(article){
            /*console.log(id)
            axios.delete(`http://localhost:3000/deletearticle/${id}`)
            .then((response) => {
                console.log(response.data)
            })
            .catch((err) => {
                console.log(err)
            })*/
            //console.log(article)
            this.$store.dispatch('deleteArticle', article)
        },
        addArticle(){
            this.$store.dispatch('addArticle', this.article)
            this.ajoutArticle = false
        }
    }
}
</script>
<style lang="scss" scoped>
    .articles{
        width: 33.33%;
        float: left;
        padding: 1.5rem;
        .content-icon{
            text-align: right;
        }
        .content-modal{
            padding: 1rem;
        }
    }
    .v-form{
        padding: 1rem;
    }
</style>
