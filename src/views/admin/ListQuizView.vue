<template>
  <div class="home">
    <Navbar />
    
    <Footbar />
  </div>
</template>



<script>
// @ is an alias to /src
import Navbar from '@/components/HomeAdminNavbar.vue'
import Footbar from '@/components/FootbarQuiz.vue'

export default {
  name: 'ListQuizView',
  components: {
    Navbar,
    Footbar
  }
}
</script>
