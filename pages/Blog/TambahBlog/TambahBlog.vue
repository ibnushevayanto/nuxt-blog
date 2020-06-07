<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <div>
          <nuxt-link :to="{name: 'blog'}" style="color: #000">
            <div class="d-flex align-center">
              <v-icon color="black">mdi-chevron-left</v-icon>
              <div class="headline font-weight-medium">Tambah Blog</div>
            </div>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex justify-center">
        <FormBlog />
      </v-col>
    </v-row>
  </div>
</template>

<script src="./TambahBlog.js">
</script>