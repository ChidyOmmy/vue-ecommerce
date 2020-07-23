const state = {
  current_order: [],
  orders: [],
  completed_orders: []
}

const getters = {
  orders: state => state.orders,
  order: state => state.current_order

}

const actions = {
  checkOut: function ( {
    commit
  }, order) {
    commit('ADD_ORDER', order)
  },
  selectOrder: function ( {
    commit
  }, order) {
    commit('SET_ORDER', order)
  },
  shipped: function ( {
    commit
  }, order) {
    commit('SHIPPED')
  }
}

const mutations = {
  ADD_ORDER(state, order) {
    state.orders.push(order)
    localStorage.orders = JSON.stringify(state.orders)
  },
  SET_ORDER(state, order) {
    state.current_order = order
  },
  SHIPPED(state, order) {
    let index = state.orders.indexOf(order)
    state.orders.splice(index, 1)
    state.completed_orders.unshift(order)
    }
}

export default {
  state,
  getters,
  actions,
  mutations

}