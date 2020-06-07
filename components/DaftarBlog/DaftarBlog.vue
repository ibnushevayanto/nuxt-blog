<template>
  <div>
    <v-row justify="center">
      <v-col cols="4" v-for="(data, index) in 3" :key="index">
        <v-card flat>
          <v-img
            src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          ></v-img>
          <v-card-title>Tips Manajemen Waktu Untuk Pegawai Agar Tetap Produktif</v-card-title>
          <v-card-text>
            <div
              class="review-text"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias mollitia optio est omnis neque dignissimos quis itaque sit aut, architecto vel eius, nam tenetur non illum porro id laboriosam? Incidunt!</div>
          </v-card-text>
          <v-card-actions>
            <v-btn class="text-capitalize" text>Read More</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
    <v-row v-if="!allblog">
      <v-col>
        <v-btn block depressed tile>View More</v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./DaftarBlog.js">
</script>