const cookieparser = process.server ? require("cookie-parser") : undefined;
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  // nuxtServerInit({ dispatch }, { req }) {
  //   let auth = null;
  //   console.log(req);
  //   if (req.headers.cookie) {
  //     const parsed = cookieparser.parse(req.headers.cookie);
  //     try {
  //       auth = JSON.parse(parsed.auth);
  //     } catch (err) {
  //       auth = null;
  //     }
  //   }

  //   dispatch("setAuth", auth);
  // },
  setAuth({ commit }, payload) {
    commit("SET_AUTH", payload);
  },
  async login({ commit, dispatch }, payload) {
    try {
      const res = await this.$axios.$post("v1/login", payload);
      Cookie.set("auth", res.data);
      await dispatch("setAuth", payload);
    } catch (error) {
      console.log(error);
    }
  }
};
