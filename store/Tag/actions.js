export default {
  async load({ commit, state }) {
    if (state.data.length === 0) {
      try {
        const tags = await this.$axios.$get("v1/tag");
        commit("SET_DATA", tags);
        return {
          success: true,
          data: tags
        };
      } catch (error) {
        console.log(error);
      }
    }
  }
};
