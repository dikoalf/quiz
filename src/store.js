import { createStore } from 'vuex';
import { userSession } from './services/UserServices'
import { quizService } from './services/QuizServices'

export default createStore({
  modules: {
    userSession,
    quizService
  }
})
