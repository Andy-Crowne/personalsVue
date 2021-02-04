<template>
  <div class="person">
    <v-container
      ><v-card elevation="7" class="pa-6" width="700">
        <v-form v-model="valid">
          <v-card-text>
            <v-row>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  @change="onChange($event, 'name')"
                  :value="person.name"
                  :rules="[notEmpty]"
                  label="Имя Фамилия"
                ></v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  :items="getAllRoles"
                  :value="person.role"
                  :rules="[notEmpty]"
                  @change="onChange($event, 'role')"
                  label="Должность"
                ></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-mask="dateMask"
                  :value="person.birthday"
                  :rules="[notEmpty]"
                  @change="onChange($event, 'birthday')"
                  label="Дата рождения"
                ></v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-mask="phoneMask"
                  :value="person.phone"
                  :rules="[notEmpty]"
                  label="Телефон"
                  @change="onChange($event, 'phone')"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-checkbox
                  :input-value="person.isArchive"
                  @change="onChange($event, 'isArchive')"
                  :label="`В архиве`"
                ></v-checkbox>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-btn @click="turnBack" text>
              Отмена
            </v-btn>
            <v-spacer />
            <v-btn class="lime darken-2" :disabled="!valid" @click="saveForm"
              >Сохранить</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
      <v-snackbar :value="saved" :timeout="timeOut"
        >Данные сохранены
        <template v-slot:action>
          <v-btn color="pink" @click="saved = false">Закрыть</v-btn>
        </template>
      </v-snackbar>
    </v-container>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { mask } from "vue-the-mask";
export default {
  beforeMount() {
    if (this.isNew) return;
    this.person = this.getPerosonById(this.$route.params.id);
  },
  directives: {
    mask
  },
  data() {
    return {
      saved: false,
      person: { name: "", role: "", birthday: "", phone: "" },
      timeOut: 5000,
      formValues: {},
      phoneMask: "#(###)-###-####",
      dateMask: "##.##.####",
      valid: false
    };
  },
  computed: {
    ...mapGetters(["getPerosonById", "getAllRoles"]),
    isNew() {
      return this.$route.params.id == "new";
    }
  },
  methods: {
    ...mapActions(["updatePerson", "addPerson"]),
    onChange(value, key) {
      this.formValues[key] = value;
    },
    notEmpty(value) {
      return !!value && !!value.length;
    },
    turnBack() {
      this.$router.back();
    },
    saveForm() {
      if (this.isNew) {
        this.addPerson(this.formValues);
      } else {
        for (let key in this.formValues) {
          this.updatePerson({
            id: this.$route.params.id,
            value: this.formValues[key],
            key
          });
        }
      }
      this.saved = true;
      setTimeout(() => {
        this.saved = false;
      }, this.timeOut);
    }
  }
};
</script>

<style lang="scss" scoped></style>
