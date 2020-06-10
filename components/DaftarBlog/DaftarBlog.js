export default {
  name: 'DaftarBlog',
  props: {
    allblog: {
      default: false,
      type: Boolean
    },
    isadmin: {
      default: false,
      type: Boolean
    },
    data: {
      default: [],
      type: Array
    }
  }
}
