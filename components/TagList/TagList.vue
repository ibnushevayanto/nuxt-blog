<template>
  <div class="mb-3 text-center">
    <v-btn
      :color="indicator === 'all' ? 'black' : 'white'"
      depressed
      rounded
      :class="[
        {
          'white--text': indicator === 'all',
          'black--text': indicator !== 'all'
        },
        'text-capitalize font-weight-bold ma-1'
      ]"
      :to="{ name: 'daftar-blog', params: { jenis: 'all' } }"
      >All</v-btn
    >
    <v-btn
      :color="indicator === tag.name.toLowerCase() ? 'black' : 'white'"
      depressed
      rounded
      :to="{
        name: 'daftar-blog',
        params: { jenis: tag.name.toLowerCase() }
      }"
      :class="[
        {
          'white--text': indicator === tag.name.toLowerCase(),
          'black--text': indicator !== tag.name.toLowerCase()
        },
        'text-capitalize font-weight-bold mr-1'
      ]"
      v-for="tag in data"
      :key="tag.id"
      >{{ tag.name }}</v-btn
    >
  </div>
</template>

<script src="./TagList.js"></script>
