import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        articles: [
            {
                id: 1, 
                nomArticle: 'Coussin', 
                descriptionArticle: 'Coussin en coton 40 x 40 cm ', 
                img: "https://images.unsplash.com/photo-1494281232141-90a40b0b06c9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=9d66710bd126434e4c50af9b1dbc55d5&auto=format&fit=crop&w=750&q=80",
                prix: 45
            },
            {
                id: 2, 
                nomArticle: 'Chemise', 
                descriptionArticle: 'Chemise en coton taille M ', 
                img: "https://images.unsplash.com/photo-1507904862046-46e6e3661508?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=0efe856edefb24e3274b92af1f9ad661&auto=format&fit=crop&w=750&q=80",
                prix: 75
            },
            {
                id: 3, 
                nomArticle: 'Robe', 
                descriptionArticle: 'Robe rose taille S', 
                img: "https://images.unsplash.com/photo-1524485566422-75cf178c59d3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=41ed2cfdd37cc5f6ab09950036780451&auto=format&fit=crop&w=750&q=80",
                prix: 60
            }
        ],
        articlesPanier: []
    },
    mutations: {
        addArticlesPanier (state, payload) {
            state.articlesPanier.push(payload)
        }
    },
    actions: {
        addArticlesPanier({commit}, payload) {
            const articlePanier ={
                id: payload.id,
                nomArticle: payload.nomArticle,
                descriptionArticle: payload.descriptionArticle,
                img: payload.img,
                prix: payload.prix
            }
            commit('addArticlesPanier', articlePanier)
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
        }
    }
})