export default {
  async load({ commit }) {
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
};
