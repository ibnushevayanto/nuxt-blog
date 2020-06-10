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
      type: Array,
      default: () => {
        return []
      },
    }
  },
  data: () => ({
    loadingdelete: {
      index: null
    }
  }),
  methods: {
    async deleteblog(id, index) {
      this.loadingdelete.index = index
      await this.$store.dispatch('Blog/deleteblog', id).then(res => {
        this.loadingdelete.index = null
      })
    }
  }
}
