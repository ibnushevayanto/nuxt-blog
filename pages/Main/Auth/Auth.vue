<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center pt-0">
        <v-card width="450" flat style="border: 1px solid #333" tile>
          <v-card-text>
            <v-text-field
              color="black"
              label="Email"
              v-model="formData.email"
            ></v-text-field>
            <v-text-field
              color="black"
              label="Password"
              type="password"
              v-model="formData.password"
            ></v-text-field>
            <v-btn
              block
              depressed
              color="black white--text"
              :loading="loading"
              @click="prosesLogin"
              >Login</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./Auth.js"></script>
