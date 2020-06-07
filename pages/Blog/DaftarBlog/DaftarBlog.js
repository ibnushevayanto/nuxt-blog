import DaftarBlog from "@/components/DaftarBlog/DaftarBlog.vue";
import {
  mapState
} from "vuex";

export default {
  asyncData(params, callback) {
    console.log(params)
    setTimeout(() => {
      callback(null, {
        success: true
      })
    }, 1000);
  },
  components: {
    DaftarBlog
  },
  computed: {
    ...mapState({
      auth: state => state.auth
    })
  },
  data: () => ({
    title: 'Asu'
  })
}
