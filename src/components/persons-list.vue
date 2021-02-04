<template>
  <div class="persons-list">
    <v-container>
      <v-data-iterator
        :items="personalList"
        :sort-by="sortBy.toLowerCase()"
        :sort-desc="sortDesc"
        :search="search"
        disable-pagination
        hide-default-footer
      >
        <template v-slot:header>
          <v-toolbar dark color="lime darken-4" class="mb-1">
            <template>
              <v-select
                flat
                clearable
                solo-inverted
                hide-details
                :items="getAllRoles"
                class="selector"
                prepend-inner-icon="mdi-filter"
                label="Должность"
                @change="onChangeRole"
              ></v-select>
              <v-checkbox
                @change="onChangeArchive"
                label="В архиве"
                hide-details
                class="ml-3"
              ></v-checkbox>
              <v-spacer></v-spacer>
              <v-select
                v-model="sortBy"
                flat
                solo-inverted
                class="selector"
                hide-details
                :items="sortKeys"
                :item-text="sortKeys.text"
                :item-value="sortKeys.value"
                prepend-inner-icon="mdi-magnify"
                label="Sort by"
              ></v-select>

              <v-btn-toggle v-model="sortDesc" mandatory class="ml-3">
                <v-btn
                  large
                  depressed
                  color="lime darken-3
"
                  :value="false"
                >
                  <v-icon>mdi-arrow-up</v-icon>
                </v-btn>
                <v-btn
                  large
                  depressed
                  color="lime darken-3
"
                  :value="true"
                >
                  <v-icon>mdi-arrow-down</v-icon>
                </v-btn>
              </v-btn-toggle>
            </template>
            <v-spacer></v-spacer>
            <v-btn elevation="2" color="lime darken-3" large :to="`person/new`"
              ><v-icon left>mdi-plus</v-icon>Добавить</v-btn
            >
          </v-toolbar>
        </template>
        <template v-slot:default="props">
          <div cols="6" v-for="item in props.items" :key="item.id">
            <PersonCard :item="item"></PersonCard>
          </div>
        </template>
      </v-data-iterator>
    </v-container>
  </div>
</template>

<script>
import PersonCard from "../components/percon-card";
import { mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      personalList: [],
      search: "",
      checkbox: true,
      filter: {},
      sortDesc: false,
      sortBy: "name",
      sortKeys: [
        { value: "name", text: "По имени" },
        { value: "birthday", text: "По дате рождения" }
      ]
    };
  },
  components: { PersonCard },
  computed: {
    ...mapState(["personal"]),
    ...mapGetters(["getAllRoles"])
  },
  methods: {
    onChangeRole(value) {
      this.search = value;
    },
    onChangeArchive(value) {
      if (value) {
        this.personalList = this.personalList.filter(
          item => item.isArchive == value
        );
      } else {
        this.personalList = this.personal;
      }
    }
  },
  created() {
    this.personalList = this.personal;
  }
};
</script>

<style lang="scss" scoped>
.selector {
  width: 120px;
}
</style>
