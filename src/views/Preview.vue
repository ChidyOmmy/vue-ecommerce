<template>
  <div id="Preview">
    <div class="w-100">
      <img :src="product.source" class="w-100 preview-img">
      <div class="over">
        <h4 class="display-4 p-1">{{ product.title }}</h4>
        <span class="text-success price">{{ product.titke }}</span>
        <Ratings :product="product"></Ratings>
        <AddToCart :product="product"></AddToCart>
      </div>
    </div>
    <div class="card description">
      <div class="card-title">
        <h3>Description</h3>
      </div>
      <div class="card-body">
        <p class="lead">
          This an example of a product preview page from the vue ecommerce website<br>
          This website is made by Chidy Ommy, One of the best developer in Tanzania.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters
  } from 'vuex'
  import AddToCart from '@/components/AddToCart.vue'
  import Ratings from '@/components/Ratings.vue'

  export default {
    name: 'Preview',
    components: {
      AddToCart,
      Ratings
    },
    computed: mapGetters(['product']),
  }
  </script>

  <style scoped>
    .preview-img {
      height: 25%;
    }
    .over {
      width: 80%;
      position: relative;
      top: -100px;
      margin-left: 10%;
      margin-right: 5%;
      border-radius: 10px;
      padding: 5px;
      background-color: white;
      box-shadow: 2px 1px grey;
    }
    .price {
      font-size: 200%;
    }
    .description {
      width: 80%;
      margin-left: 10%;
      margin-right: 10%;
    }

  </style>