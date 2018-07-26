import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Articles from '@/components/Articles'
import Sign from '@/components/Sign'
import Panier from '@/components/Panier'
import Admin from '@/components/Admin'
import Article from '@/components/Article'
import Profil from '@/components/Profil'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Articles',
      name: 'Articles',
      component: Articles
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
    },
    {
      path: '/Admin/:id',
      props: true,
      name: 'Admin',
      component: Admin
    },
    {
      path: '/Article/:id',
      name: 'Article',
      props: true,
      component: Article
    },
    {
      path: '/Sign',
      name: 'Sign',
      component: Sign
    }

  ]
})
