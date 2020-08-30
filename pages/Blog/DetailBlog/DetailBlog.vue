<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <div>
          <nuxt-link :to="{ name: 'blog' }" style="color: #000">
            <div class="d-flex align-center">
              <v-icon color="black">mdi-chevron-left</v-icon>
              <div class="button font-weight-medium">Detail Blog</div>
            </div>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col lg="8">
        <div class="display-1 font-weight-medium text-center">
          {{ data.title }}
        </div>
        <div class="d-flex justify-center mt-5">
          <div>
            <v-img :src="data.urlimage" width="500"></v-img>
          </div>
        </div>
        <p class="black--text mt-5 text-justify body-1">{{ data.content }}</p>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./DetailBlog.js"></script>
