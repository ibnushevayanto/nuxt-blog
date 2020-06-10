export default {
  name: 'FormBlog',
  props: {
    title_value: {
      type: String,
      default: null
    },
    content_value: {
      type: String,
      default: null
    },
    urlimage_value: {
      type: String,
      default: null
    },
    loading: {
      type: Boolean,
      default: false
    }
  },
  created() {
    this.title = this.title_value
    this.content = this.content_value
    this.urlimage = this.urlimage_value
  },
  data: () => ({
    title: null,
    content: null,
    urlimage: null
  }),
  methods: {
    submit() {
      this.$emit('submit', {
        title: this.title,
        content: this.content,
        urlimage: this.urlimage
      })
    }
  }
}
