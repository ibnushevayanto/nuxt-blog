import FormBlog from "@/components/Form/Blog/FormBlog.vue";

export default {
  components: {
    FormBlog
  },
  async asyncData({
    params,
    store
  }) {
    const data = await store.dispatch('Blog/detailblog', params.id)
    return {
      data: data.data
    }
  },
  data: () => ({
    loadingrequest: false
  }),
  methods: {
    async editblog(val) {
      this.loadingrequest = await true

      await this.$store.dispatch('Blog/editblog', {
        id: this.$route.params.id,
        data: val
      }).then(res => {
        this.loadingrequest = false

        this.$router.push({
          name: 'blog'
        })
      })

    }
  }
}
