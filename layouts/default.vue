<template>
  <v-app>
    <div class="d-flex justify-space-between pa-5 align-center">
      <v-toolbar-title style="width: 33%">Blog</v-toolbar-title>
      <div style="width: 33%" class="d-flex justify-center">
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
      <div style="width: 33%" class="d-flex justify-end">
        <v-btn
          color="black white--text"
          depressed
          class="text-capitalize"
          v-if="auth === null"
          tile
          :to="{ name: 'auth' }"
        >
          Sign In
        </v-btn>
        <v-menu
          transition="slide-y-transition"
          bottom
          offset-y
          flat
          :close-on-content-click="false"
          v-if="auth !== null"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              text
              color="black"
              dark
              v-bind="attrs"
              v-on="on"
              tile
              class="text-capitalize"
            >
              <v-icon class="mr-2">mdi-account-circle</v-icon>
              {{ auth.name }}
            </v-btn>
          </template>
          <v-list dense class="pa-0" elevation="0">
            <v-list-item-group>
              <v-list-item active-class="white-active-class-background">
                <v-list-item-content>
                  <v-list-item-title>Change Profile</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-list-item
                @click="logout"
                active-class="white-active-class-background"
              >
                <v-list-item-content>
                  <v-list-item-title>Logout</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-menu>
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
import { mapState } from "vuex";
const Cookie = process.client ? require("js-cookie") : undefined;
export default {
  computed: {
    ...mapState({
      auth: state => state.auth
    })
  },
  methods: {
    logout() {
      Cookie.remove("auth");
      this.$store.dispatch("setAuth", null);
      this.$router.push({ name: "auth" });
    }
  }
};
</script>
