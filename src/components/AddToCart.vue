<template>
  <div class="AddToCart">
    <div class="btn-group">
      <button class="btn btn-primary" v-show="product.quantity" @click="min(product)">-</button>
      <button class="btn btn-primary" :class="{ 'btn-warning' :product.quantity }" @click="add(product)">
        <template v-if="product.quantity">
          {{ product.quantity }} in cart
        </template>
        <template v-else>
          Add To Cart
        </template>
      </button>
      <button class="btn btn-primary" v-show="product.quantity" @click="add(product)">+</button>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';

  export default {
    name: "AddToCart",
    props: {
      product: Object
    },
    computed: mapGetters(['cart']),
    methods: {
      add: function (product) {
        this.addToCart(product)
      },
      min: function (product) {
        this.removeFromCart(product)
      },
      ...mapActions(['addToCart', 'removeFromCart'])
    }
  }
  </script>