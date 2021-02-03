<template>
  <v-app>
    <MainView />
  </v-app>
</template>

<script>
import MainView from "./views/MainView";

export default {
  name: "App",
  components: {
    MainView
  },

  data: () => ({
    //
  })
};
</script>
