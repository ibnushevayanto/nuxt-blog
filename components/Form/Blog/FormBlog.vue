<template>
  <div>
    <v-card flat tile style="border: 1px solid black" width="600">
      <v-card-text>
        <v-text-field label="Title" color="black" v-model="title"></v-text-field>
        <v-textarea color="black" label="Content"></v-textarea>
        <v-text-field label="Image URL" color="black"></v-text-field>
        <v-btn block color="black white--text" depressed>Simpan</v-btn>
      </v-card-text>
    </v-card>
  </div>
</template>

<script src="./FormBlog.js">
</script>