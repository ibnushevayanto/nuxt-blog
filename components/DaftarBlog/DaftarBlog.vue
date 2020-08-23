<template>
  <div>
    <v-row>
      <v-col cols="4" v-for="(data, index) in data" :key="index">
        <v-card flat height="100%">
          <v-img :src="data.urlimage" v-if="data.urlimage !== null"></v-img>
          <v-card-title>{{ data.title }}</v-card-title>
          <v-card-text>
            <div class="review-text">{{ data.content }}</div>
          </v-card-text>
          <v-card-actions class="d-flex justify-space-between align-center">
            <v-btn
              class="text-capitalize"
              depressed
              color="black white--text"
              @click="
                $router.push({ name: 'detail-blog', params: { id: data.id } })
              "
              >Read More</v-btn
            >
            <div v-if="isadmin">
              <v-btn
                icon
                color="black"
                x-small
                @click="
                  $router.push({ name: 'ubah-blog', params: { id: data.id } })
                "
              >
                <v-icon>mdi-pencil</v-icon>
              </v-btn>
              <v-btn
                icon
                color="black"
                x-small
                @click="deleteblog(data.id, index)"
                :loading="loadingdelete.index === index"
              >
                <v-icon>mdi-trash-can-outline</v-icon>
              </v-btn>
            </div>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-if="data.length === 0">
        <v-card flat tile style="border: 1px solid black;">
          <v-card-text class="text-center">Blog is empty</v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="!allblog">
      <v-col>
        <v-btn
          block
          depressed
          tile
          @click="$router.push({ name: 'blog' })"
          v-if="data.length > 3"
          >More</v-btn
        >
      </v-col>
    </v-row>
  </div>
</template>

<script src="./DaftarBlog.js"></script>
