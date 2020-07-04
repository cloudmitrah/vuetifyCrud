<template>
   
    <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app>
      <v-list dense>
        <template>
     <v-list-item to="/">
            <v-list-item-action>
              <v-icon>mdi-home</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
               Home
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item to="/create">
            <v-list-item-action>
              <v-icon>mdi-message-text</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>
                Add Product
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
        <span  class="hidden-sm-and-down">Demo Project</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon large>
        <v-avatar size="32px" item>
          <v-img src="https://cdn.vuetifyjs.com/images/logos/logo.svg" alt="Vuetify"></v-img>
        </v-avatar>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
         
 <router-view></router-view>

        </v-row>
      </v-container>
    </v-main>
  </v-app>

</template>

<script>
export default {
   data: () => ({
    dialog: false,
    drawer: null,
  })
}
</script>

<style>

</style>
