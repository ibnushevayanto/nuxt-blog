export default {
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    indicator: {
      type: String,
      default: ""
    }
  },
  methods: {
    async pindahPage(val) {
      await this.$emit("loading", true);
      await this.$router.push({ name: "daftar-blog", params: { jenis: val } });
    }
  }
};
