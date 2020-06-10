import DaftarBlog from "@/components/DaftarBlog/DaftarBlog.vue";
import {
  mapState
} from "vuex";

export default {
  components: {
    DaftarBlog
  },
  computed: {
    ...mapState({
      auth: state => state.auth
    })
  },
  async asyncData({
    store
  }) {
    const blog = await store.dispatch('Blog/loadblog')

    return {
      blog: blog.data
    }

  },
  data: () => ({
    title: 'Asu'
  })
}
