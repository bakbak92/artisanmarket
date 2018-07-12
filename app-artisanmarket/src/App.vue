<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" fixed>
      <v-list dense>
        <v-list-tile v-for="menu in menuItems" router :to="menu.link" :key="menu.title">
          <v-list-tile-action>
            <v-icon>{{menu.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{menu.title}}</v-list-tile-content>
        </v-list-tile>
        <v-list-tile router to="/Panier">
          <v-list-tile-action>
            <v-icon>shopping_cart</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Panier</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"><v-icon>menu</v-icon></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Artisan Market
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat v-for="menu in menuItems" router :to="menu.link" :key="menu.title">
          <v-icon left>{{menu.icon}}</v-icon>
          {{menu.title}}
        </v-btn>
      </v-toolbar-items>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn flat router to="/Panier">
          <v-icon left>shopping_cart</v-icon> <span class="nbPanier">{{nbArticlePanier}}</span>
          Panier
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view>

      </router-view>
    </main>
     <v-footer
    dark
    height="auto"
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal justify-center">
        <strong class="subheading ">La market space des artisans</strong>
      </v-card-title>

      <v-card-actions class="grey darken-3 justify-center">
        &copy;2018 — <strong>Artisan Market</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: 'shopping_basket', title: 'Article', link: '/Articles'},
        {icon: 'person', title: 'Profil', link: '/Profil'}
      ],
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    }
  },
  computed: {
    nbArticlePanier() {
      return this.$store.getters.nbArticlesPanier
    }
  },
  name: 'App'
}
</script>
<style lang="scss">
.application.theme--light{
  background-color: white;
}
.teal{
  background-color:#a4d8f7!important;
}
main{
  background: white;
  min-height: 550px;
}
.nbPanier{
  position: relative;
  right: 1rem;;
}
.v-toolbar {
  background-color: white!important;
   -webkit-box-shadow: 0 0 0 0;
  box-shadow: 0 0 0 0;
}
.v-btn:not(.v-btn--depressed){
  -webkit-box-shadow: 0 0 0 0;
  box-shadow: 0 0 0 0;
}
.v-btn{
  &.v-btn--active{
    color: #99e1e5;
    background: white;
  }
  &:hover{
    background: white;
    color: #99e1e5;
  }
  &:active{
    color:#99e1e5;
    background: white;
  }
}
.v-btn--active:before, .v-btn:focus:before, .v-btn:hover:before{
  background-color: white;
}
a.primary--text.v-list__tile--active.v-list__tile.v-list__tile--link{
  //color:#FFB6B9!important;
  color: #99e1e5!important;
}
.v-dialog.v-dialog--active{
    max-height: 100%!important;
    .v-form{
      padding: 1rem;
    }
  }
.v-dialog{
  -webkit-box-shadow: 0 0 0 0;
  box-shadow: 0 0 0 0;
}
.v-overlay:before {
    background-color: #2121218c;
}
</style>
