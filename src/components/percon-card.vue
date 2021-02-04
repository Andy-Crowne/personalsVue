<template>
  <div>
    <v-card elevation="7" class="mb-4">
      <v-card-title class="subheading font-weight-bold">
        {{ item.name }}
      </v-card-title>

      <v-divider />
      <v-card-text class="font-weight-bold"
        >Должность: {{ getRoletext(item.role) }}</v-card-text
      >
      <v-card-text class="font-weight-bold"
        >Номер телефона: {{ item.phone }}</v-card-text
      >
      <v-card-text class="font-weight-bold"
        >Дата рождения: {{ item.birthday }}</v-card-text
      >
      <v-card-actions
        ><v-btn
          link
          :to="`person/${item.id}`"
          class="lime darken-2
"
          >Открыть карточку</v-btn
        ></v-card-actions
      >
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  methods: {
    getRoletext(value) {
      return this.getAllRoles.find(item => item.value == value).text;
    }
  },
  props: {
    item: { type: Object, default: () => {} }
  },
  computed: {
    ...mapGetters(["getAllRoles"])
  }
};
</script>

<style scoped></style>
