<template>
  <div class="person">
    <v-container
      ><v-card elevation="7">
        <v-form ref="form" v-model="valid" lazy-validation>
          <v-text-field v-model="name" label="Имя фамилия"></v-text-field>
        </v-form>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
