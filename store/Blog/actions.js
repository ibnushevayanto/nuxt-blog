export default {
  async addblog({ commit }, payload) {
    try {
      const id = await this.$axios
        .$post("https://nuxt-blog-6b95b.firebaseio.com/data.json", payload)
        .then(res => {
          return res.name;
        });
      await commit("ADD_DATA", {
        ...payload,
        id
      });
      return {
        success: true
      };
    } catch (error) {
      return {
        success: false
      };
    }
  },
  async loadblog({ rootState, state, commit }, payload) {
    // if (state.data.length === 0) {

    try {
      /*
      ? Logic Penggunaan Link Request

       * 1. Jika Payload Bernilai Tidak null
       * 1.1. Memfilter Array Dari State data Pada Tag
       * 1.2. Jika Saat Filter Datanya Ada Maka
       * 1.2.1. payload Akan Diisi Dengan id Dari Sebuah Tag
       * 1.3. Jika Tidak Ada Maka Payload Saya Asumsikan Adalah Sebuah Link
       * 
       * 2. Jika Payload Bernilai Null
       * 2.1. Url Pada Request Tidak Akan Mengirimkan Parameter Apapun
       */
      if (payload !== null) {
        const searchData = rootState.Tag.data.filter(
          arr => arr.name.toLowerCase() === payload
        );
        if (searchData.length > 0) {
          payload = "v1/blogpost/" + searchData[0].id;
        }
      } else {
        payload = "v1/blogpost";
      }

      const blog = await this.$axios.$get(payload);

      // ? End Logic Penggunaan Link Request

      await commit("SET_DATA", blog.data);
      await commit("SET_PAGINATION_META", blog.meta);
      await commit("SET_PAGINATION_LINKS", blog.links);

      return {
        success: true,
        data: blog.data
      };
    } catch (error) {
      return {
        success: false
      };
    }
    // }
  },
  async detailblog(context, payload) {
    try {
      const data = await this.$axios
        .$get(
          "https://nuxt-blog-6b95b.firebaseio.com/data/" + payload + ".json"
        )
        .then(res => {
          return res;
        });

      return {
        success: true,
        data
      };
    } catch (error) {
      return {
        success: false
      };
    }
  },
  async editblog({ commit }, payload) {
    try {
      await this.$axios.$put(
        "https://nuxt-blog-6b95b.firebaseio.com/data/" + payload.id + ".json",
        payload.data
      );

      await commit("EDIT_DATA", {
        id: payload.id,
        data: payload.data
      });

      return {
        sucess: true
      };
    } catch (error) {
      return {
        success: false
      };
    }
  },
  async deleteblog({ commit }, payload) {
    try {
      await this.$axios.$delete(
        "https://nuxt-blog-6b95b.firebaseio.com/data/" + payload + ".json"
      );

      await commit("DELETE_BLOG", payload);

      return {
        success: true
      };
    } catch (error) {
      return {
        success: false
      };
    }
  }
};
