import DaftarBlog from "@/components/DaftarBlog/DaftarBlog.vue";
import {
  mapState
} from "vuex";

export default {
  components: {
    DaftarBlog
  },
  computed: {
    ...mapState({
      auth: state => state.auth
    })
  }
}
