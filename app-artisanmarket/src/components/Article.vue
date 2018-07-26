<template>
  <v-container>
    <v-card>
        <v-card-media
          class="white--text"
          height="500px"
          :src="article.image_article"
        >
        </v-card-media>
        <v-card-title>
          <div>
            <h3>{{article.nom_article}}</h3><br>
            <span>{{article.description_article}}</span><br>
            <span>{{article.prix_article}} €</span>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn class="btn" @click="addArticle(article)">
            Ajouter au panier
          </v-btn>
        </v-card-actions>
        <v-card-actions>
          Avis({{coms.length}})
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon @click="show = !show">{{ show ? 'remove' : 'add' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-slide-y-transition>
          <v-card v-show="show">
            <v-list two-line>
              <v-btn @click="formCommentaire = true">
                Rediger un commentaire
              </v-btn>
              <v-container v-show="formCommentaire">
                <v-card class="form-avis">
                  <form>
                    <v-text-field
                      v-model="newCommentaire.auteur_commentaire"
                      label="Nom auteur du commentaire"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="newCommentaire.title_commentaire"
                      label="Titre du commentaire"
                      required
                    ></v-text-field>
                    <v-text-field
                      v-model="newCommentaire.detail_commentaire"
                      label="Detail du commentaire"
                      required
                    ></v-text-field>
                    <v-btn @click="addCommentaire">submit</v-btn>
                    <v-btn @click="formCommentaire = false">clear</v-btn>
                  </form>
                </v-card>
              </v-container>
              <template v-for="(commentaire, index) in coms">
                <v-list-tile :key="index" avatar ripple>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ commentaire.auteur_commentaire }}</v-list-tile-title>
                    <v-list-tile-sub-title class="text--primary">{{ commentaire.title_commentaire }}</v-list-tile-sub-title>
                    <v-list-tile-sub-title>{{ commentaire.detail_commentaire }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-list-tile-action-text>12h</v-list-tile-action-text>
                  </v-list-tile-action>
                </v-list-tile>
                <v-divider v-if="index + 1 < commentaires.length" :key="`divider-${index}`"></v-divider>
              </template>
            </v-list>
          </v-card>
        </v-slide-y-transition>
        <div>
          {{artisan.prenom_artisan}}
        </div>
      </v-card>
  </v-container>
</template>
<script>
import axios from 'axios'
export default {
  props: ['id'],
  data(){
    return {
      show: false,
       commentaires: [
          { date: '15 min',title_commentaire: 'Brunch this weekend?', auteur_commantaire: 'Ali Connors', detail_commantaire: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
          { date: '2 hr',title_commentaire: 'Summer BBQ', auteur_commantaire: 'me, Scrott, Jennifer', detail_commantaire: "Wish I could come, but I'm out of town this weekend." },
          { date: '6 hr',title_commentaire: 'Oui oui', auteur_commantaire: 'Sandra Adams', detail_commantaire: 'Do you have Paris recommendations? Have you ever been?' },
          { date: '12 hr',title_commentaire: 'Birthday gift', auteur_commantaire: 'Trevor Hansen', detail_commantaire: 'Have any ideas about what we should get Heidi for her birthday?' },
          { date: '18hr',title_commentaire: 'Recipe to try', auteur_commantaire: 'Britta Holt', detail_commantaire: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.' }

        ],
        article: {},
        formCommentaire: false,
        newCommentaire: {
          title_commentaire: '',
          detail_commantaire: '',
          auteur_commantaire: '',
          article_id: this.id
        },
        artisan: {}
    }
  },
  created(){
    axios.get(`http://localhost:3000/commentaire/${this.id}`)
    .then((response) => {
      console.log(response.data)
      this.$store.dispatch('getCommentaires', response.data)
      this.commentaires = response.data
      this.formCommentaire = false
    })
    .catch((err) => {
      console.log(err)
    })

    axios.get(`http://localhost:3000/article/${this.id}`)
    .then((response) => {
      console.log(response.data)
      response.data.map((article) => {
        this.article = article
      })
      axios.get(`http://localhost:3000/artisan/${this.article.id_artisan}`)
      .then((response) => {
        response.data.map((artisan) => {
          this.artisan = artisan
        })
        console.log(this.artisan)
      })
      .catch((err) => {
        console.log(err)
      })
    })
    .catch((err) => {
      console.log(err)
    })
    //console.log('id artisan' + this.article.id_artisan)

  },
  computed: {
    coms(){
      return this.$store.getters.commentaires
    }
  },
  methods: {
    addArticle(article) {
            const product = {
                id: article.id,
                nom_article: article.nom_article,
                description_article: article.description_article,
                image_article: article.image_article,
                prix_article: article.prix_article
            }
            console.log(product)
            this.$store.dispatch('addArticlesPanier', product)
    },
    addCommentaire(){
      this.$store.dispatch('addCommentaire', this.newCommentaire)
      /*axios.post('http://localhost:3000/addcommentaire', {
        title_commentaire: this.newCommentaire.title_commentaire,
        detail_commentaire: this.newCommentaire.detail_commentaire,
        auteur_commentaire: this.newCommentaire.auteur_commentaire,
        article_id: this.newCommentaire.article_id
        })
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
      })*/
    }
  }
}
</script>
<style lang="scss">
.v-btn.btn{
    background-color: #7c73e6!important;
    color: white!important;
    width: 100%;
}
.form-avis{
  max-width: 500px;
  padding: 2rem;
  .v-input.v-text-field {
    margin-bottom: 2rem;
  }
}
</style>
