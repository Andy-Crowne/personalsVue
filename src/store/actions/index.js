import { getPeopleFromBack } from "@/mockApi/api";

export default {
  updateApp: async ({ dispatch, commit }) => {
    const peopleList = await dispatch("getPeople");
    if (peopleList.status === 200) {
      commit("UPDATE_RESPONSE_PEOPLE", peopleList.data);
    }
    //commit("UPDATE_APP");
  },
  getPeople: async () => {
    return getPeopleFromBack();
  },
  updatePerson: ({ commit }, { id, value, key }) => {
    commit("UPDATE_PERSON", { id, value, key });
  },
  addPerson: ({ state, commit }, person) => {
    person.id = state.personal.length + 1;
    commit("ADD_NEW_PERSON", person);
  }
};
