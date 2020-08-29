<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <v-overlay :value="loading">
          <v-progress-circular
            :size="70"
            :width="7"
            indeterminate
            color="black"
          ></v-progress-circular>
        </v-overlay>
        <TagList
          :data="tags"
          @loading="pindahPage"
          :indicator="$route.params.jenis"
        />

        <!-- Row Title Dan Button Tambah -->
        <div class="d-flex justify-space-between mt-8">
          <div class="display-1 font-weight-medium text-capitalize">
            {{ activeTag }} Blog
          </div>
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
    <v-row>
      <v-col>
        <v-pagination
          :value="paginationSetting.current_page"
          color="black white--text"
          :length="paginationSetting.last_page"
          circle
          @input="paginationClick"
        ></v-pagination>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./DaftarBlog.js"></script>
