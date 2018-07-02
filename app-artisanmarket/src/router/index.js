import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Article from '@/components/Article'
import Profil from '@/components/Profil'
import Panier from '@/components/Panier'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Article',
      name: 'Article',
      component: Article
    },
    {
      path: '/Panier',
      name: 'Panier',
      component: Panier
    },
    {
      path: '/Profil',
      name: 'Profil',
      component: Profil
    }

  ]
})
