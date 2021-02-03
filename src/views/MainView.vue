<template>
  <v-app id="inspire">
    <v-app-bar
            shrink-on-scroll
            app
            color="blue lighten-1"
            flat
    >
    <h5>Главная</h5>
      <v-tabs
              centered
              class="ml-n9"
              color="blue-grey darken-4

"
      >
      </v-tabs>

    </v-app-bar>

    <v-main class="blue lighten-4">
      <v-container>
        <v-row>
          <v-col
                  cols="12"
                  sm="12"
          >
            <v-sheet
                    rounded="lg"
                    min-height="50"
            >
              <!--  -->
            </v-sheet>
          </v-col>

          <v-col
                  cols="12"
                  sm="12"
          >
            <v-sheet
                    min-height="70vh"
                    rounded="lg"
            >
              <!--  -->
            </v-sheet>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
    export default {
        data: () => ({
            links: [
                'Список работников',
                'О Приложении',

            ],
        }),
    }
</script>
