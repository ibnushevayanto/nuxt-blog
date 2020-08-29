export default {
  data: () => ({
    formData: {
      email: "",
      password: ""
    },
    loading: false
  }),
  methods: {
    prosesLogin() {
      this.loading = true;
      this.$store.dispatch("login", this.formData).then(res => {
        this.loading = false;
        if (res.success) {
          this.$router.push({ name: "landing" });
        }
      });
    }
  }
};
