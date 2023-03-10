+<template>
  <div class="home">
    <Navbar />
  <div class="quiz-container">
    <div class="card col-10 col-md-6 col-lg-3 justify-content-center align-items-center">
      <!-- header -->
      <div class="card-header  col-10 bg-light">
        <div class="d-flex justify-content-between align-items-center w-100">
          <div class="row">
            <div class="title mb-2 mb-md-0">Awesome Quiz Application</div>
          </div>
          <div class="row ml-md-auto">
            <div class="">Time Left: 15</div>
          </div>
        </div>
      </div>

      <!-- body -->
      <div class="d-flex flex-column justify-content-center align-items-center h-100">
        <div class="input-group">
          <div>{{ answers }}</div>
          <div v-for="(quiz, index) in quizzes" :key="index">
            <div class="row">
              <p class="question">{{ index + 1 }}. {{ quiz.desc }}</p>
              <div class="row">
                <div class="form-check">
                  <input type="radio" :id="`option1${index+1}`"  :value="quiz.option1" v-model="answered[index+1]"/>
                  <label :for="`option1${index+1}`"> {{ quiz.option1 }}</label>
                
                  <input type="radio" :id="`option1${index+1}`" :value="quiz.option2" v-model="answered[index+1]"/>
                  <label :for="`option1${index+1}`">{{ quiz.option2 }}</label>

                  <input type="radio" :id="`option1${index+1}`" :value="quiz.option3" v-model="answered[index+1]"/>
                  <label :for="`option1${index+1}`">{{ quiz.option3 }}</label>

                  <input type="radio" :id="`option1${index+1}`" :value="quiz.option4" v-model="answered[index+1]"/>
                  <label :for="`option1${index+1}`">{{ quiz.option4 }}</label>
              </div>
            </div>
            <br />
          </div>
        </div>
      </div>
      </div>
      <!-- footer -->
      <div class="mt-3 d-flex justify-content-end">
        <input
          type="submit"
          class="btn btn-success ml-auto"
          id="next"
          value="Next"
          @click="submitQuiz"
          style="width: 100px;"
        />
      </div>
    </div>
  </div>
  <Footbar />
</div>
</template>

<script>
import Navbar from '@/components/HomeNavbar.vue'
import Footbar from '@/components/FootbarQuiz.vue'
// import { mapActions, mapState } from 'vuex';
import axios from 'axios';
// import Swal from 'sweetalert2'
// import Swal from 'sweetalert2/dist/sweetalert2.js';
// import { SweetAlertOptions } from 'sweetalert2';

export default {
  name: 'QuizView',
  components: {
    Navbar,
    Footbar
  },
  data() {
  return {
    selectedOption: null,
    quizzes: [],
    answered: {
      1: "",
      2: "",
      3: "",
      4: "",
      5: "",
      6: "",
      7: "",
      8: "",
      9: "",
      10: "",
    }
  };
},

  computed: {
    // ...mapState(['quizzes'])
  },
  methods: {
    // ...mapActions(["selectQuiz"]),
    async getQuiz() {
      try {
        const response = await axios.get('http://localhost/quizApp-api/api/quiz', {
          headers: {
            'Accept': 'application/json',
            Authorization: `Bearer ${localStorage.getItem("access_token")}`
          }, params: {
            type: 'quiz',
          }
        })

        this.quizzes = response.data.data;
        
        // this.quizzes.push([...response.data.data]);
        // const regularQuizzesArray = Array.from(quizzes);
        // console.log(Array.form(this.quizzes))
        if (this.quizzes.length > 0) {
          this.selectedOption = this.quizzes[0];
        }
      } catch (error) {
        console.log(error);
      }
    },
    submitQuiz() {
      const score = this.quizzes?.map((proxy)=>proxy.score)
      const rightAnswers = this.quizzes?.map((proxy)=>proxy.answer)
      const userAnswer = Object.values(this.answered)
      let totalScore = 0;

      for (let index = 0; index <= rightAnswers.length; index++) {
          if(rightAnswers[index] == userAnswer[index])
          {
            totalScore = totalScore + Number(score[index]);
          }
      }

      // Swal.fire({
      //   title: 'Congratulation!',
      //   text: totalScore,
      //   confirmButtonText: 'OK'
      // })
    }
  },
  created() {
    this.getQuiz();
  },
  mounted() {
    this.$nextTick(function () {
      this.getQuiz();
    })
  }
}
</script>

<style>
.input-group-text input[type="radio"] {
  margin-right: 10px;
}
.quiz-container {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    margin-bottom: 20px;
}
</style>
