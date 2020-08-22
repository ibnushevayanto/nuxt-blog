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
  }
};
