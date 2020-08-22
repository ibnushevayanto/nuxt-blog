<template>
  <v-app>
    <div class="d-flex justify-space-between pa-5 align-center">
      <v-toolbar-title>Blog</v-toolbar-title>
      <div>
        <v-btn
          text
          class="text-capitalize font-weight-medium"
          active-class="active-menu"
          tile
          :to="{ name: 'landing' }"
          >Home</v-btn
        >
        <v-btn
          text
          class="text-capitalize font-weight-medium"
          active-class="active-menu"
          tile
          :to="{ name: 'about' }"
          >About</v-btn
        >
        <v-btn
          text
          class="text-capitalize font-weight-medium"
          active-class="active-menu"
          tile
          :to="{ name: 'blog' }"
          >Blog</v-btn
        >
      </div>
      <div>
        <v-btn icon color="black" :to="{ name: 'auth' }">
          <v-icon>mdi-login-variant</v-icon>
        </v-btn>
      </div>
    </div>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/"
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js"
    };
  }
};
</script>
