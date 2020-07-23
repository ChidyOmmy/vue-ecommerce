const state = {
  user: {},
  authenticated: false,
  is_admin: false,
  login_error_message: '',
}

const getters = {
  user: state => {
    if(state.user.username){
      return state.user
    }else if(localStorage.length){
      try{
      state.user = JSON.parse(localStorage.user)
      return state.user
      }catch(error){
        return state.user
      }
    }else{
      return state.user
    }
  },
  authenticated: state => {
    if(state.authenticated){
      return state.authenticated
    }else if(localStorage.length){
      try{
      state.authenticated = localStorage.authenticated
      return state.authenticated
      }catch(error){
        return state.authenticated
      }
    }else{
      return state.authenticated
    }
  },
  login_error_message: state => state.login_error_message,
  is_admin: state => {
    if(state.is_admin){
      return state.is_admin
    }else if(localStorage.length){
      try{
      state.is_admin = JSON.parse(localStorage.is_admin)
      return state.is_admin
      }catch(error){
        return state.is_admin
      }
    }else{}
  }
}

const actions = {
  login: function ( {
    commit
  }, loginData) {
    if (loginData.username && loginData.password) {
      if (loginData.username === 'admin' && loginData.password === 'admin') {
        commit('LOGIN_AS_ADMIN', loginData)
      } else {
        commit('LOGIN', loginData)
      }
    } else {
      commit('LOGIN_ERROR')
    }
  },
  logout: function ( {
    commit
  }) {
    commit('LOGOUT')
  },
  updateUserInfo: function ( {
    commit
  }, userInfo) {
    commit('UPDATE_INFO', userInfo)
  },
  deleteaccount: function ( {
    commit
  }) {
    commit('DELETE')
  }
}

const mutations = {
  LOGIN(state, loginData) {
    state.authenticated = true,
    state.user = loginData
    localStorage.user = JSON.stringify(loginData)
    localStorage.authenticated = true
  },
  LOGIN_AS_ADMIN(state, loginData) {
    state.authenticated = true,
    state.user = loginData
    state.is_admin = true
    localStorage.user = JSON.stringify(loginData)
    localStorage.authenticated = true
    localStorage.is_admin = true
  },
  LOGIN_ERROR(state) {
    state.login_error_message = 'Enter valid credentials'
  },
  LOGOUT(state) {
    state.user = {},
    state.authenticated = false,
    state.login_error_message = ''
  },
  UPDATE_INFO(state, userInfo) {
    localStorage.user = JSON.stringify(userInfo)
    state.user = userInfo
    alert('Info Updated successful')
  },
  DELETE(state) {
    state.user = {}
    state.authenticated = false
    state.is_admin = false
    localStorage.clear()
    alert('Signed Out successful')
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}