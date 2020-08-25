<template>
  <div>
    <v-row>
      <v-col class="d-flex justify-center pt-0">
        <v-card width="450" flat style="border: 1px solid #333" tile>
          <v-card-text>
            <div class="d-flex justify-center">
              <v-switch color="black" v-model="form.login">
                <template v-slot:label>
                  <div class="body-1 black--text">
                    {{ form.login ? "Login" : "Register" }}
                  </div>
                </template>
              </v-switch>
            </div>
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
              @click="prosesLogin"
              >{{ form.login ? "Login" : "Register" }}</v-btn
            >
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script src="./Auth.js"></script>
