// import router from "../router";
const axios = require('axios');

export const quizService = {
  state: {
    quizzes: []
  },
  mutations: {
    setQuizzes(state, quizzes) {
        state.quizzes = quizzes
      }
  },
  actions: {
        async selectQuiz(){
            try {
                const response  = await axios.get('http://localhost/quiz-api/api/quiz', {
                    headers: {
                            'Accept': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    },params: {
                        type: 'quiz',
                    }
                })
          
                if(response.code == "00")
                {
                    return response.data
                }
            } catch (err) {
                console.log(err)
            }
        },
        async showQuiz(quizData){
            try {
                const response  = await axios.get('http://localhost/quiz-api/api/quiz/' + quizData.id , {
                    headers: {
                            'Accept': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    },params: {
                        type: 'quiz',
                    }
                })

                // console.log(response.data)

                // commit('setQuizzes', JSON.stringify(response.data.data))
          
                if(response.code == "00")
                {
                    // localStorage.setItem('response',JSON.stringify(response.data.data))
                    return response.data
                }
            } catch (err) {
                console.log(err)
            }
        },
        async createQuiz(){
            try {
                const response  = await axios.post('http://localhost/quiz-api/api/quiz', {
                    headers: {
                            'Accept': 'application/json',
                            Authorization: `Bearer ${localStorage.getItem("access_token")}`
                    },data: {
                        data: 'quiz',
                    }
                })

                // console.log(response.data)

                // commit('setQuizzes', JSON.stringify(response.data.data))
          
                if(response.code == "00")
                {
                    // localStorage.setItem('response',JSON.stringify(response.data.data))
                    return response.data
                }
            } catch (err) {
                console.log(err)
            }
        },
  },
  getters: {
  }
}