export default {
  getBlog(state) {
    return state.data;
  },
  getBlogPaginationSetting(state) {
    return state.paginationMeta;
  },
  getBlogPaginationLink(state) {
    return state.paginationLink;
  }
};
