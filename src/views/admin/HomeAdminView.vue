<template>
  <div class="home">
    <Navbar />
    <div class="admin-home d-flex justify-content-around">
      <router-link to="/admin/quiz/list">
        <div class="admin-card d-flex align-items-center justify-content-center">
          <h1>Quiz</h1>
        </div>
      </router-link>
      <router-link to="/admin/user/list">
      <div class="admin-card d-flex align-items-center justify-content-center">
        <h1>Users</h1>
      </div>
      </router-link>
    </div>
    <Footbar />
  </div>
</template>



<script>
// @ is an alias to /src
import Navbar from '@/components/HomeAdminNavbar.vue'
import Footbar from '@/components/FootbarQuiz.vue'

export default {
  name: 'HomeAdminView',
  components: {
    Navbar,
    Footbar
  }
}
</script>
