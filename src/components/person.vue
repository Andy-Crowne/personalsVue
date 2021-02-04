<template>
  <div class="person">
    <v-container
      ><v-card elevation="7" class="pa-6">
      <v-row align="center">
        <v-col
                class="d-flex"
                cols="12"
                sm="6"
        >
          <v-text-field v-model="name" label="Имя Фамилия"></v-text-field>
        </v-col>

        <v-col
                class="d-flex"
                cols="12"
                sm="6"
        >
          <v-select
                  :items="items"
                  filled
                  label="Filled style"
          ></v-select>
        </v-col>
        <v-col
                class="d-flex"
                cols="12"
                sm="6"
        >
          <v-text-field v-model="name" label="Дата рождения"></v-text-field>
        </v-col>

        <v-col
                class="d-flex"
                cols="12"
                sm="6"
        >
          <v-text-field v-model="name" label="Телефон"></v-text-field>
        </v-col>
        <v-col
                class="d-flex"
                cols="12"
                sm="6"
        >
          <v-checkbox
                  v-model="checkbox"
                  :label="`В архиве`"
          ></v-checkbox>
        </v-col>

        <v-col
                class="d-flex"
                cols="12"
                sm="6"
        >
          <v-btn class="lime darken-2
">Сохранить</v-btn>
        </v-col>
      </v-row>
        <v-form ref="form" v-model="valid" lazy-validation>




        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>

export default {

};
</script>

<style lang="scss" scoped></style>
