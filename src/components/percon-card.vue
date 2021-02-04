<template>
  <div>
    <v-card
            elevation="7"
            class="mb-4"

    >
      <v-card-title class="subheading font-weight-bold">
        {{ item.name }}
      </v-card-title>

      <v-divider />
      <v-card-text class="font-weight-bold"
      >Должность: {{ item.role }}</v-card-text
      >
      <v-card-text class="font-weight-bold"
      >Номер телефона: {{ item.phone }}</v-card-text
      >
      <v-card-actions><v-btn class="lime darken-2
">Открыть карточку</v-btn></v-card-actions>
    </v-card>
  </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>

</style>
