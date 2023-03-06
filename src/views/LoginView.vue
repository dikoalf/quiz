<template>
  <LoginNavbar />

  <body class="body-login">
    <div class="login-container">
      <div class="card col-10 col-md-6 col-lg-3">
        <div class="d-flex">
          <div class="mx-auto">
            <h2 class="">Sign In</h2>
          </div>
        </div>
        <form >
          <div class="input-container">
            <label for="email" class="sr-only">Email</label>
            <input type="text" id="email" v-model="objUser.email" placeholder="Email" class="form-control" />

            <label for="password" class="sr-only">Password</label>
            <input type="password" v-model="objUser.password" id="password" class="form-control" placeholder="Password" />
            <br />
          </div>
        </form>
        <div class="button-container mx-auto">
          <input
            type="submit"
            class="btn btn-primary btn-block"
            id="login"
            value="Login"
            @click="getUser"
          />
        </div>
        <div class="col mx-auto">
          <span>
            <b>Don't have an account yet?
              <router-link to="/register"><a href="#">Sign Up</a></router-link>
            </b>
          </span>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import LoginNavbar from "@/components/LoginNavbar.vue";
import { mapActions } from 'vuex';

export default {
  name: "LoginView",
  components: {
    LoginNavbar,
  },
  data() {
    return {
      objUser: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(["login"]),
    async getUser(){
      this.login(this.objUser)
    },
  },
};
</script>


<style>

</style>
