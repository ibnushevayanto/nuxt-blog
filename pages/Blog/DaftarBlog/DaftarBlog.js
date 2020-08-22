import DaftarBlog from "@/components/DaftarBlog/DaftarBlog.vue";
import TagList from "@/components/TagList/TagList.vue";
import { mapState } from "vuex";

export default {
  components: {
    DaftarBlog,
    TagList
  },
  computed: {
    ...mapState({
      auth: state => state.auth
    })
  },
  created() {},
  async asyncData({ store }) {
    await store.dispatch("Blog/loadblog");
    await store.dispatch("Tag/load");

    return {
      blog: store.getters["Blog/getBlog"],
      tags: store.getters["Tag/getTag"]
    };
  },
  data: () => ({})
};
