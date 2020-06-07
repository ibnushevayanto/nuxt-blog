<template>
  <div>
    <v-row>
      <v-col class="pt-0">
        <div>
          <nuxt-link :to="{name: 'blog'}" style="color: #000">
            <div class="d-flex align-center">
              <v-icon color="black">mdi-chevron-left</v-icon>
              <div class="headline font-weight-medium">Detail Blog</div>
            </div>
          </nuxt-link>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          class="display-1 font-weight-medium text-center"
        >Tips Manajemen Waktu Untuk Pegawai Agar Tetap Produktif</div>
        <div class="d-flex justify-center mt-5">
          <div>
            <v-img
              src="https://images.unsplash.com/photo-1524678714210-9917a6c619c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
              width="500"
            ></v-img>
          </div>
        </div>
        <p
          class="black--text mt-5 text-justify body-1"
        >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex animi officiis commodi distinctio mollitia? Aliquam, nulla odit voluptates ab facere aliquid vitae magnam eaque iusto quae, dicta excepturi molestiae porro. Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae minus, deserunt animi saepe molestiae ratione quia voluptates quaerat rem provident fugiat qui magnam cupiditate iure modi dolorum accusamus voluptatum. Sint. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam fugit numquam beatae perferendis molestiae placeat, quis natus ipsam error qui molestias. Officia quam aperiam assumenda perferendis mollitia. Pariatur, dolore unde.</p>
      </v-col>
    </v-row>
  </div>
</template>