<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <div class="mb-3 text-center">
          <v-btn
            color="black"
            depressed
            rounded
            class="white--text text-capitalize font-weight-bold mr-1"
            >All</v-btn
          >
          <v-btn
            color="black"
            depressed
            rounded
            class="white--text text-capitalize font-weight-bold mr-1"
            v-for="tag in tags"
            :key="tag.id"
            >{{ tag.name }}</v-btn
          >
        </div>
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
