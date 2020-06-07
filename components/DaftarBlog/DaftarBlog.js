export default {
  name: 'DaftarBlog',
  props: {
    allblog: {
      default: false,
      type: Boolean
    },
    auth: {
      default: null,
      type: Object
    }
  }
}
