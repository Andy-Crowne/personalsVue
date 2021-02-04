export default {
  UPDATE_RESPONSE_PEOPLE: (state, peopleList) => {
    state.personal = peopleList;
  },
  UPDATE_PERSON: (state, { id, value, key }) => {
    return state.personal.find(item => {
      if (item.id == id) {
        item[key] = value;
      }
    });
  },
  ADD_NEW_PERSON: (state, person) => {
    if (!person || !person.id) return;
    state.personal.push(person);
  }
};
