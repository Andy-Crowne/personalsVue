<template>
  <v-app id="inspire">
    <v-navigation-drawer floating v-model="drawer" app class="teal darken-2">
      <v-list rounded>
        <v-list-item v-for="item in items" :key="item.title" :to="item.to" link>
          <v-list-item-icon>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title class="white--text">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app class="teal darken-1" dark>
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
import { mapActions } from "vuex";
export default {
  data: () => ({
    drawer: false,
    items: [
      { title: "Главная", icon: "mdi-view-dashboard", to: "/" },
      { title: "О приложении", icon: "mdi-forum", to: "about" }
    ]
  }),
  methods: {
    ...mapActions(["updateApp"])
  },
  async beforeMount() {
    await this.updateApp();
  }
};
</script>
