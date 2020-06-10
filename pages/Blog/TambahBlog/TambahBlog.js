import FormBlog from "@/components/Form/Blog/FormBlog.vue";

export default {
  components: {
    FormBlog
  },
  data: () => ({
    loadingrequest: false
  }),
  methods: {
    async submit(val) {
      this.loadingrequest = await true

      await this.$store.dispatch('Blog/addblog', val).then(res => {
        this.loadingrequest = false
        this.$router.push({
          name: 'blog'
        })
      })

    }
  }
}
