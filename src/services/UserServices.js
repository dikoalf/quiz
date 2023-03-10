import router from "../router";
const axios = require('axios');

export const userSession = {
  state: {
    isLogin : false,
    user : []
  },
  mutations: {
    setLoginStatus: (state, data) => {
      state.isLogin = data;
    },
    setUser: (state, data) => {
      state.user = data;
    }
  },
  actions: {
        async register({commit},userData){
        
            try {
                const {data} = await axios.post('http://localhost/quiz-api/api/register', {
                    name: userData.name,
                    email: userData.email,
                    password: userData.password,
                })
                
                commit("setLoginStatus", false)
          
                alert(data.message);
          
                if(data.code == "00")
                {
                    router.push('/')
                }
            } catch (err) {
                alert(err);
                console.log(err)
            }
        },

        async login({ commit }, userData){

            try {
                const {data} = await axios.get('http://localhost/quiz-api/api/login', {
                    params: {
                        email: userData.email,
                        password: userData.password
                    }
                })

                const responseData = data.data

                localStorage.setItem('access_token',data.token)
          
                commit("setLoginStatus", true)
                commit("setUser", responseData)
          
                // alert(data.message);

                if(data.code == "00")
                {
                    if(responseData.level == '1')
                    {
                        router.push('/admin')
                    }
                    else
                    {
                        router.push('/home')
                    }
                }
            } catch (err) {
                alert(err);
                console.log(err)
            }
        },
        async select(){

            try {
                const {response} = await axios.get('http://localhost/quiz-api/api/users', {
                    headers: {
                        Accept: 'application/json',
                        Authorization: 'bearer  ' + localStorage.getItem("access_token")
                    }
            })
          
                alert(response.message);

                if(response.code == "00")
                {
                    return response.data
                }
            } catch (err) {
                alert(err);
                console.log(err)
            }
        },
        async show({ commit }, userData){
            try {
                const {response} = await axios.get('http://localhost/quiz-api/api/users/' + userData.id, {
                    header: {
                        Accept: 'application/json',
                        Authorization: 'bearer  ' + localStorage.getItem("access_token")
                    }
                })
          
          
                commit("setLoginStatus", true)
          
                alert(response.message);

                if(response.code == "00")
                {
                    //
                }
            } catch (err) {
                alert(err);
                console.log(err)
            }
        },
        async update({ commit }, userData){
            try {
                const {response} = await axios.put('http://localhost/quiz-api/api/users/'+ userData.id, {
                    header: {
                        Accept: 'application/json',
                        Authorization: 'bearer  ' + localStorage.getItem("access_token")
                    },
                    data : userData
                })
          
                commit("setLoginStatus", true)
          
                alert(response.message);

                if(response.code == "00")
                {
                    router.push('/user/list')
                }
            } catch (err) {
                alert(err);
                console.log(err)
            }
        },
        // async delete({ commit }, userData){
        //     try {
                
        //     } catch (err) {
        //         alert(err);
        //         console.log(err)
        //     }
        // },
  },
  getters: {
    getName: (state) => {
        return state.user.name;
    },
    getLevel: (state) => {
        return state.user.level;
    }
  }
}