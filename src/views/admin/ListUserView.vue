<template>
  <div class="home">
    <Navbar />

    <div class="col-lg-12">
      <div class="card mb-2">
        <div class="card-header py-3 d-flex">
          <h3 class="align-items-center justify-content-between">User List</h3>
        </div>
        <div class="card-body">
          <div class="row d-flex justify-content-center align-item-center text-center  ">
            <div class="col-8">
              <table id="user-table" class="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">No</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Level</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody v-for="(user, index) in users" :key="index">
                    <tr>
                      <th>{{ index + 1 }}</th>
                      <td>{{ user.name }}</td>
                      <td>{{ user.email }}</td>
                      <td>{{ user.level }}</td>
                      <td>
                        <button type="button" class="btn btn-success" @click.prevent="update(user)">Edit</button>
                        <button type="button" class="btn btn-danger">Delete</button>
                      </td>
                    </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footbar />
  </div>
</template>



<script>
// @ is an alias to /src
import Navbar from "@/components/HomeAdminNavbar.vue";
import Footbar from "@/components/FootbarQuiz.vue";
// import router from "@/router";
import axios from 'axios';

export default {
  name: "ListUserView",
  components: {
    Navbar,
    Footbar,
  },
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async userList() {
      try {
        const response = await axios.get('http://localhost/quiz-api/api/users', {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }
        })

        this.users = response.data.data;

      } catch (error) {
        console.log(error);
      }
    },
    update(user) {
      // console.log(data)
      this.$router.push({
          name: "user update",
          params: { id: user.id },
        });
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.userList();
    })
  }
};
</script>
