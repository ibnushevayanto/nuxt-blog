export default {
  data: () => ({
    form: {
      login: true
    },
    formData: {
      email: "",
      password: ""
    }
  }),
  methods: {
    prosesLogin() {
      if (this.form.login) {
        this.$store.dispatch("login", this.formData);
      } else {
        alert("register masih belum dibuat");
      }
    }
  }
};
