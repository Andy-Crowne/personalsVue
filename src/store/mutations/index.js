export default {
  UPDATE_RESPONSE_PEOPLE: (state, peopleList) => {
    state.personal = peopleList;
  },
  UPDATE_PERSON: (state, { id, person }) => {
    return state.personal.find(item => {
      if (item.id == id) {
        item = Object.assign(item, person);
      }
    });
  },
  ADD_NEW_PERSON: (state, { id, person }) => {
    if (!person || !id) return;
    person.id = id;
    state.personal.push(person);
  }
};
