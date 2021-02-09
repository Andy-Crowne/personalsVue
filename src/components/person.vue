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
                  :value="formValues.name"
                  :rules="[notEmpty]"
                  label="Имя Фамилия"
                ></v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-select
                  :items="getAllRoles"
                  :value="formValues.role"
                  :rules="[notEmpty]"
                  @change="onChange($event, 'role')"
                  label="Должность"
                ></v-select>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-mask="dateMask"
                  :value="formValues.birthday"
                  :rules="[notEmpty, validDate]"
                  @change="onChange($event, 'birthday')"
                  label="Дата рождения"
                ></v-text-field>
              </v-col>

              <v-col class="d-flex" cols="12" sm="6">
                <v-text-field
                  v-mask="phoneMask"
                  :value="formValues.phone"
                  :rules="[notEmpty, validPhone]"
                  label="Телефон"
                  @change="onChange($event, 'phone')"
                ></v-text-field>
              </v-col>
              <v-col class="d-flex" cols="12" sm="6">
                <v-checkbox
                  :input-value="formValues.isArchive"
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
            <v-btn
              class="lime darken-2"
              :disabled="!valid || !needSave"
              @click="saveForm"
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
import moment from "moment";
import { uuid } from "@/helpers";

export default {
  beforeMount() {
    if (this.isNew) {
      this.newId = uuid();
      return;
    }
    this.person = this.getPerosonById(this.$route.params.id);
    this.formValues = Object.assign({}, this.person);
  },
  directives: {
    mask
  },
  data() {
    return {
      newId: false,
      dateFormat: "DD.MM.YYYY",
      saved: false,
      person: {},
      timeOut: 5000,
      formValues: {},
      phoneMask: "+#(###)-###-####",
      dateMask: "##.##.####",
      valid: false
    };
  },
  computed: {
    ...mapGetters(["getPerosonById", "getAllRoles"]),
    isNew() {
      return this.$route.params.id == "new";
    },
    needSave() {
      if (this.isNew) return true;
      return JSON.stringify(this.formValues) !== JSON.stringify(this.person);
    }
  },
  methods: {
    ...mapActions(["updatePerson", "addPerson"]),
    onChange(value, key) {
      this.formValues[key] = value;
    },
    validDate(date) {
      if (!date) return false;
      let inputDate = moment(date, this.dateFormat);
      return (
        inputDate.isValid() && moment(new Date(), this.dateFormat) > inputDate
      );
    },
    validPhone(phone) {
      if (!phone || !phone.length) return false;
      let phoneMatch = phone.match(/\d/g);
      return phoneMatch ? phoneMatch.length === 11 : false;
    },
    notEmpty(value) {
      return !!value && !!value.length;
    },
    turnBack() {
      this.$router.back();
    },
    saveForm() {
      if (this.isNew) {
        this.addPerson({ id: this.newId, person: this.formValues });
        this.saved = true;
      } else {
        this.updatePerson({
          id: this.$route.params.id,
          person: this.formValues
        });
        this.saved = true;
      }
      setTimeout(() => {
        this.saved = false;
      }, this.timeOut);
    }
  }
};
</script>

<style lang="scss" scoped></style>
