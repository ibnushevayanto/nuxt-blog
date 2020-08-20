import DaftarBlog from "@/components/DaftarBlog/DaftarBlog.vue";
import { mapState } from "vuex";

export default {
  components: {
    DaftarBlog
  },
  computed: {
    ...mapState({
      auth: state => state.auth
    })
  },
  async asyncData({ store }) {
    const blog = await store.dispatch("Blog/loadblog");
    const tags = await store.dispatch("Tag/load");

    return {
      blog: blog.data,
      tags: tags.data
    };
  },
  data: () => ({
    title: "Asu"
  })
};
