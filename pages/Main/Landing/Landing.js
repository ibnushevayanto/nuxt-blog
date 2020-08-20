import AppCarousel from "@/components/Carousel/Carousel.vue";
import DaftarBlog from "@/components/DaftarBlog/DaftarBlog.vue";
export default {
  components: {
    AppCarousel,
    DaftarBlog
  },
  data: () => ({}),
  created() {
    console.log(process.env.BASE_URL);
  }
};
