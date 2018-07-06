import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        articles: [
            /*{
                id: 1, 
                nomArticle: 'Coussin', 
                descriptionArticle: 'Coussin en coton 40 x 40 cm ', 
                img: "https://images.unsplash.com/photo-1494281232141-90a40b0b06c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d66710bd126434e4c50af9b1dbc55d5&auto=format&fit=crop&w=750&q=80",
                prix: 45,
                quantité: 1
            },
            {
                id: 2, 
                nomArticle: 'Chemise', 
                descriptionArticle: 'Chemise en coton taille M ', 
                img: "https://images.unsplash.com/photo-1507904862046-46e6e3661508?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0efe856edefb24e3274b92af1f9ad661&auto=format&fit=crop&w=750&q=80",
                prix: 75,
                quantité: 1
            },
            {
                id: 3, 
                nomArticle: 'Robe', 
                descriptionArticle: 'Robe rose taille S', 
                img: "https://images.unsplash.com/photo-1524485566422-75cf178c59d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41ed2cfdd37cc5f6ab09950036780451&auto=format&fit=crop&w=750&q=80",
                prix: 60,
                quantité: 1
            }*/
        ],
        articlesPanier: []
    },
    mutations: {
        getArticles(state, payload){
            state.articles = payload
        },
        addArticlesPanier (state, payload) {
            state.articlesPanier.push(payload)
        },
        incrementItemQuantity(state, cartItem){
            cartItem.quantity++
        },
    
        decrementProductInventory(state, product){
            product.inventory--
        },
        incrementquantite(state, payload){
            payload.quantité++
        },
        editArticle(state, payload) {
            state
        }
        
    },
    actions: {
        getArticles(context){
            axios.get('http://localhost:3000/articles')
                .then((response) => {
                    let articles = response.data
                    articles.map(article => {
                        article.modeEdit = false
                    })
                    context.commit('getArticles', articles)
                })
        },
        addArticlesPanier(context, payload) {
            const article = context.state.articlesPanier.find(item => {
                item.id === payload.id
            })
            const articlePanier ={
                id: payload.id,
                nom_article: payload.nom_article,
                description_article: payload.description_article,
                image_article: payload.image_article,
                prix_article: payload.prix_article,
                date: Date.now()
            }
            if(!article) {
                context.commit('addArticlesPanier', articlePanier)
            }else{
                context.commit('incrementquantite', articlePanier)
            }
            
        },
        editArticle(context, payload) {
            const article ={
                nom_article: payload.nom_article,
                description_article: payload.description_article,
                image_article: payload.image_article,
                prix_article: payload.prix_article,
            }
            context.commit('editArticle', article) 
        }
    },
    getters: {
        articles(state) {
            return state.articles.map(article => {
                return article
            })
        },
        articlesPanier(state) {
            return state.articlesPanier.map(article => {
                return article
            })
        },
        nbArticlesPanier(state) {
            return state.articlesPanier.length
        },
        totalPanier (state) {
            let val = 0
            return state.articlesPanier.reduce((total, article) =>
                total + article.prix_article, val
            )
        },
        article(state) {
            return (articleId) => {
                return state.articles.find((article) => {
                  return article.id === articleId
                })
              }
        }
    }
})