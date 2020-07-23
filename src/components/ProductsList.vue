<template>
  <div id="ProductsList">
    <div class="row">
      <div class="col-md-6 mb-2" v-for="product in shoes">
        <div class="card">
          <div class="card-img-container">
            <img class="card-img" :src="product.source">
          </div>
          <div class="card-title-container">
            <h5 class="card-title">{{ product.title }}</h5>
          </div>
          <div class="card-body">
            <Ratings :product="product"></Ratings>
            <h5 class="text-success">$ {{ product.price }}</h5>
            <AddToCart :product="product"></AddToCart>
          </div>
          <div class="card-footer">
            <router-link to="/preview">
              <button class="btn w-100" @click="selectProduct(product)">Preview</button>

            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  import AddToCart from '@/components/AddToCart.vue';
  import Ratings from '@/components/Ratings.vue';

  export default {
    name: "ProductsList",
    components: {
      AddToCart,
      Ratings
    },
    computed: mapGetters(['shoes', 'cart']),
    methods: mapActions(['selectProduct'])
  }
  </script>


  <style scoped>
    .card-img {
      width: 100%;
      max-height: 100%;
    }
    .card-img-container {
      height: 50%;
    }
    .card-title-container {
      height: 10%;
      max-height: 10%;
    }
    .card-title {
      font-size: 200%;
    }
    .card {
      width: 100%;
      height: 100%;
      box-shadow: 3px 2px grey;
    }
  </style>