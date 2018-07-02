<template>
  <v-app>
    <v-navigation-drawer v-model="sideNav" fixed>
      <v-list dense>
        <v-list-tile >
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Article</v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Profil</v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-action>
            <v-icon></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>Panier</v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav" class="hidden-sm-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">
          Artisan Market
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-xs-only" router-link="/Article">
        <v-btn flat v-for="menu in menuItems" router :to="menu.link" :key="menu.title">
          <v-icon left>{{menu.icon}}</v-icon>
          {{menu.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view>

      </router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false,
      menuItems: [
        {icon: '', title: 'Article', link: '/Article'},
        {icon: '', title: 'Profil', link: '/Profil'},
        {icon: '', title: 'Panier', link: '/Panier'}
      ]
    }
  },
  name: 'App'
}
</script>
<style lang="scss">
main{
  background: white;
}
.v-toolbar {
  background-color: white!important;
}
.v-btn:not(.v-btn--depressed){
  -webkit-box-shadow: 0 0 0 0;
  box-shadow: 0 0 0 0;
}
.v-btn{
  &.v-btn--active{
    color: #FFB6B9;
    background: white;
  }
  &:hover{
    background: white;
    color: #FFB6B9;
  }
  &:active{
    color:#FFB6B9;
    background: white;
  }
}
.v-btn--active:before, .v-btn:focus:before, .v-btn:hover:before{
  background-color: white;
}
</style>
