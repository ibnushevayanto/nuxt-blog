const Cookie = process.client ? require("js-cookie") : undefined;

export default function({ $axios, store, redirect }) {
  const auth = store.state.auth;
  if (auth !== null) {
    $axios.setHeader("Authorization", `Bearer ${auth.api_token}`);
  }

  /*
   * Saat Axios Sedang Melakukan Request
   */

  $axios.onRequest(config => {
    config.https = process.env.NODE_ENV === "production";
    config.baseURL = process.env.BASE_URL;
  });

  /*
   * Saat Axios Berhasil Menyelesaikan Request
   */

  $axios.onResponse(response => {});

  // * Saat Axios Mendapatkan Error

  $axios.onError(error => {
    if (error.message.toLowerCase().includes("network")) {
      //   store.commit("LOADING_STOP_ALL");
    } else {
      const code = parseInt(error.response && error.response.status);

      switch (code) {
        case 401:
          store.dispatch("setAuth", null);
          Cookie.remove("auth");
          redirect("/auth");
          break;
        case 502:
          error.response.data = {
            ...error.response.data,
            code: 502,
            message: "Aplikasi sedang tidak terkoneksi ke server.",
            data: null,
            errors: null
          };
          break;
        case 413:
          error.response.data = {
            ...error.response.data,
            code: 413,
            message: "File gagal diunggah.",
            data: null,
            errors: null
          };
          break;
        case 500:
          error.response.data = {
            ...error.response.data,
            code: 500,
            message: "Server dalam perbaikan.",
            data: null,
            errors: null
          };
          break;
      }

      return Promise.reject(error);
    }
  });
}
