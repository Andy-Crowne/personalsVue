import { getPeopleFromBack } from "@/mockApi/api";

export default {
  updateApp: async ({ dispatch, commit }) => {
    let peopleList = { data: [] };
    if (localStorage.getItem("vuex")) {
      let localData = JSON.parse(localStorage.getItem("vuex"));
      peopleList = localData.personal;
    } else {
      peopleList = await dispatch("getPeople");
      if (peopleList.status === 200) {
        commit("UPDATE_RESPONSE_PEOPLE", peopleList.data);
      }
    }
  },
  getPeople: async () => {
    return getPeopleFromBack();
  },
  updatePerson: ({ commit, getters }, { id, person }) => {
    let existPerson = getters.getPerosonById(id);
    if (!existPerson) return;
    commit("UPDATE_PERSON", { id, person });
  },
  addPerson: ({ commit, getters }, { id, person }) => {
    let existPerson = getters.getPerosonById(id);
    if (existPerson) return;
    commit("ADD_NEW_PERSON", { id, person });
  }
};
