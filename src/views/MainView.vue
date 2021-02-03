<template>
  <v-app id="inspire">
    <v-navigation-drawer
      floating
      v-model="drawer"
      app
      class="lime lighten-5
"
    >
      <v-list dense rounded>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="lime lighten-1" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>CRM CONTROL</v-toolbar-title>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <!--  -->
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { title: "Главная", icon: "mdi-view-dashboard", to: "/" },
      { title: "О приложении", icon: "mdi-forum", to: "About" }
    ]
  })
};
</script>
