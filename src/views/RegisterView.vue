<template>
  <LoginNavbar />

  <body class="body-login">
    <div class="login-container">
      <div class="card col-10 col-md-6 col-lg-3">
        <div class="d-flex" style="background-color: #7bb4e3">
          <div class="mx-auto">
            <h2 class="">Sign Up</h2>
          </div>
        </div>
        <div class="input-container">
            <label for="name" class="sr-only">Name</label>
            <input type="text" id="name" v-model="objUser.name" placeholder="Name" class="form-control" />

            <label for="email" class="sr-only">Email</label>
            <input type="text" id="email" v-model="objUser.email" placeholder="Email" class="form-control" />

            <label for="password" class="sr-only">Password</label>
            <input type="password" v-model="objUser.password" id="password" class="form-control" placeholder="Password" />
        </div>
        <div class="button-container mx-auto">
          <input
            type="submit"
            class="btn btn-primary btn-block"
            id="create"
            value="Create"
            @click="registerUser"
          />
        </div>
        <br />
        <div class="mx-auto">
          <span>
            <b>Already have account?
              <router-link to="/">
              <a href="#">Sign In</a></router-link>
            </b>
          </span>
        </div>
      </div>
    </div>
  </body>
  
  <Footbar />
</template>

<script>
import LoginNavbar from "@/components/LoginNavbar.vue";
import Footbar from '@/components/FootbarQuiz.vue'
import { mapActions } from 'vuex';

export default {
  name: "RegisterView",
  components: {
    LoginNavbar,
    Footbar
  },
  setup () {
  },
  data() {
    return {
      objUser: {
        name: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapActions(["register"]),
    async registerUser(){
      this.register(this.objUser)
    },
  },
};
</script>

<style>
</style>