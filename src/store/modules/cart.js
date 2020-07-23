const state = {
  totalItems: 0,
  totalPrice: 0,
  cart: []
}

const getters = {
  cart: state => state.cart,
  totalItems: state => state.totalItems,
  totalPrice: state => state.totalPrice
}

const actions = {
  addToCart: function ( {
    commit
  }, product) {
    commit('ADD_CART', product)
  },
  removeFromCart: function ( {
    commit
  }, product) {
    commit('REMOVE_CART', product)
  },
  clearCart: function ( {
    commit
  }) {
    commit('CLEAR_CART')
  }
}

const mutations = {
  ADD_CART(state, product) {
    if (state.cart.indexOf(product) == -1) {
      state.cart.unshift(product)
    }
    product.quantity++
    state.totalItems++
    state.totalPrice += product.price
  },
  REMOVE_CART(state, product) {
    product.quantity--
    state.totalItems--
    state.totalPrice -= product.price
    const index = state.cart.indexOf(product)
    if (product.quantity == 0) {
      state.cart.splice(index, 1)
    }
   },
  CLEAR_CART(state) {
    for (let i = 0; i < state.cart.length; i++) {
      state.cart[i].quantity = 0
    }
    state.totalItems = 0
    state.totalPrice = 0
    state.cart = []
   }
}

export default {
  state,
  getters,
  actions,
  mutations
}