<template>
  <div class="home">
    <Navbar />
    <div class="home-container">
      <div class="card col-10 col-md-6 col-lg-3 d-flex justify-content-center align-items-center">
        <div class="d-flex flex-column justify-content-center align-items-center h-100">
          <ul class="list-group w-100">
            <li class="list-group-item">Quiz rules :</li>
            <li class="list-group-item">1. You will only have 90 second per each question.</li>
            <li class="list-group-item">2. Once you select your answer, you can't reselect.</li>
            <li class="list-group-item">3. You can't select any option once time goes off.</li>
            <li class="list-group-item">4. You'll get points for each correct answer, each question has a different point</li>
          </ul>
          <div class="mx-auto mt-3">
            <router-link to="/quiz">
            <input
              type="submit"
              class="btn btn-success btn-block"
              id="start"
              value="Start Quiz"
              @click="startQuiz"
            />
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <Footbar />
  </div>
</template>



<script>
// @ is an alias to /src
import Navbar from '@/components/HomeNavbar.vue'
import Footbar from '@/components/FootbarQuiz.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Footbar
  }
}
</script>
