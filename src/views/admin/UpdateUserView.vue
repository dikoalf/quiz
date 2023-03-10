<template>
  <div class="home">
    <Navbar />
      
    <div class="col-lg-12">
      <div class="card mb-2">
        <div class="card-header py-3 d-flex">
          <h3 class="align-items-center justify-content-between">User Detail</h3>
        </div>
        <div class="card-body">
          <div class="row d-flex justify-content-center align-item-center">
            <div class="col-8">
              <form >
                <div class="input-container">
                  <label for="name" class="sr-only">Name</label>
                  <input type="name" id="name" class="form-control" :value="user.name"/>
                  <label for="email" class="sr-only">Email</label>
                  <input type="text" id="email" class="form-control" :value="user.email"/>
                  <label for="Level" class="sr-only">Level</label>
                  <input type="text" id="email" class="form-control" :value="user.level"/>
                </div>
              </form>
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
import Navbar from '@/components/HomeAdminNavbar.vue'
import Footbar from '@/components/FootbarQuiz.vue'
import axios from 'axios';

export default {
  name: 'UpdateUserView',
  props: { id: String },
  components: {
    Navbar,
    Footbar
  },
  data() {
    return {
      user: [],
      objUser: {
        level: "",
      },
    };
  },
  async created () {
    try {
      const response = await axios.get(`http://localhost/quiz-api/api/users/${encodeURIComponent(this.id)}`, {
        headers: {
          'Accept': 'application/json',
          Authorization: `Bearer ${localStorage.getItem("access_token")}`
        }
      })

      this.user = response.data.data;

    } catch (error) {
      console.log(error);
    }
  }
  // mounted() {
  //   let data = this.$route.params;
  //   console.log("data is", data);
  // }
}
</script>
