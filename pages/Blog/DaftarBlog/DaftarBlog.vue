<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <TagList :data="tags" :indicator="$route.params.jenis" />

        <!-- Row Title Dan Button Tambah -->
        <div class="d-flex justify-space-between">
          <div class="display-1 font-weight-medium">All Blog</div>
          <!-- Button Tombah -->
          <v-btn icon color="black" :to="{ name: 'tambah-blog' }">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
          <!-- End Button Tambah -->
        </div>
        <!-- End Row Title Dan Button Tambah -->
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <DaftarBlog
          allblog
          :isadmin="auth === null ? false : true"
          :data="blog"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script src="./DaftarBlog.js"></script>
