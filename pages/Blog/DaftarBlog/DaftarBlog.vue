<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <div class="d-flex justify-space-between">
          <div class="display-1 font-weight-medium">Daftar Blog</div>
          <v-btn icon color="black" :to="{name: 'tambah-blog'}">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <DaftarBlog allblog :isadmin="(auth === null ) ? false : true" />
      </v-col>
    </v-row>
  </div>
</template>

<script src="./DaftarBlog.js">
</script>