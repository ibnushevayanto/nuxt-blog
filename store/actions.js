const cookieparser = process.server ? require("cookie") : undefined;
const Cookie = process.client ? require("js-cookie") : undefined;

export default {
  nuxtServerInit({ dispatch }, { req }) {
    let auth = null;
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie);
      try {
        auth = JSON.parse(parsed.auth);
      } catch (err) {
        auth = null;
      }
    }

    dispatch("setAuth", auth);
  },
  setAuth({ commit }, payload) {
    console.log(payload);
    commit("SET_AUTH", payload);
  },
  async login({ dispatch }, payload) {
    try {
      const res = await this.$axios.$post("v1/login", payload);
      Cookie.set("auth", res.data);
      await dispatch("setAuth", res.data);

      return { success: true, msg: "Berhasil Login" };
    } catch (error) {
      console.log(error);
    }
  }
};
