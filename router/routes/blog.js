import Blog from "~/pages/Blog/Blog.vue";
import DaftarBlog from "~/pages/Blog/DaftarBlog/DaftarBlog.vue";
import TambahBlog from "~/pages/Blog/TambahBlog/TambahBlog.vue";
import UbahBlog from "~/pages/Blog/UbahBlog/UbahBlog.vue";
import DetailBlog from "~/pages/Blog/DetailBlog/DetailBlog.vue";

export default [
  {
    path: "/blog",
    component: Blog,
    children: [
      {
        name: "blog",
        path: "",
        redirect: "/blog/all"
      },
      {
        name: "daftar-blog",
        path: ":jenis",
        component: DaftarBlog
      },
      {
        name: "tambah-blog",
        path: "tambah",
        component: TambahBlog
      },
      {
        name: "ubah-blog",
        path: "ubah/:id",
        component: UbahBlog
      },
      {
        name: "detail-blog",
        path: "detail/:id",
        component: DetailBlog
      }
    ]
  }
];
