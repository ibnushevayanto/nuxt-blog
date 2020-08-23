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
  async asyncData({ store, params }) {
    await store.dispatch("Tag/load");
    await store.dispatch(
      "Blog/loadblog",
      params.jenis === "all" ? null : params.jenis
    );

    return {
      blog: store.getters["Blog/getBlog"],
      tags: store.getters["Tag/getTag"],
      activeTag: params.jenis,
      paginationSetting: store.getters["Blog/getBlogPaginationSetting"],
      paginationLink: store.getters["Blog/getBlogPaginationLink"]
    };
  },
  data: () => ({
    loading: false
  }),
  methods: {
    pindahPage(val) {
      this.loading = val;
    },
    async paginationClick(val) {
      const link = this.paginationSetting.path + `?page=${val}`;
      this.loading = true;
      await this.$store.dispatch("Blog/loadblog", link).then(res => {
        this.loading = false;
        this.blog = this.$store.getters["Blog/getBlog"];
        this.paginationSetting = this.$store.getters[
          "Blog/getBlogPaginationSetting"
        ];
        this.paginationLink = this.$store.getters["Blog/getBlogPaginationLink"];
      });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.loading = false;
    });
  }
};
