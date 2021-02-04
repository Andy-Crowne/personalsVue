export default {
  getPerosonById: state => id => {
    return state.personal.find(item => {
      if (item.id == id) {
        return item;
      }
    });
  },
  getAllRoles: state => {
    return state.roles;
  }
};
