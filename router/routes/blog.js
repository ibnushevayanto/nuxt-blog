import Blog from '~/pages/Blog/Blog.vue'
import DaftarBlog from '~/pages/Blog/DaftarBlog/DaftarBlog.vue'
import TambahBlog from '~/pages/Blog/TambahBlog/TambahBlog.vue'
import UbahBlog from '~/pages/Blog/UbahBlog/UbahBlog.vue'

export default [{
  path: '/blog',
  component: Blog,
  children: [{
      name: 'blog',
      path: '',
      component: DaftarBlog
    },
    {
      name: 'tambah-blog',
      path: 'tambah',
      component: TambahBlog
    },
    {
      name: 'ubah-blog',
      path: 'ubah/:id',
      component: UbahBlog
    }
  ]
}]
