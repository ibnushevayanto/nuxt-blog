export default {
  SET_DATA(state, payload) {
    state.data = payload;
  },
  SET_PAGINATION_META(state, payload) {
    state.paginationMeta = payload;
  },
  SET_PAGINATION_LINKS(state, payload) {
    state.paginationLink = payload;
  },
  ADD_DATA(state, payload) {
    state.data.push(payload);
  },
  EDIT_DATA(state, payload) {
    if (state.data.length > 0) {
      const index = state.data.findIndex(res => res.id === payload.id);

      state.data[index] = {
        id: payload.id,
        ...payload.data
      };
    }
  },
  DELETE_BLOG(state, payload) {
    const index = state.data.findIndex(res => res.id === payload);

    state.data.splice(index, 1);
  }
};
