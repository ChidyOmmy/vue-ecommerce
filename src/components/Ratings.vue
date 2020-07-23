<template>
  <div id="Ratings" class="p-1">
    <i class="fa fa-star" :class="{ 'gold': product.ratings >= 1 }" @click="rate(product, 1)"></i>
    <i class="fa fa-star" :class="{ 'gold': product.ratings >= 2 }" @click="rate(product, 2)"></i>
    <i class="fa fa-star" :class="{ 'gold': product.ratings >= 3 }" @click="rate(product, 3)"></i>
    <i class="fa fa-star" :class="{ 'gold': product.ratings >= 4 }" @click="rate(product, 4)"></i>
    <i class="fa fa-star" :class="{ 'gold': product.ratings >= 5 }" @click="rate(product, 5)"></i>
    {{ product.ratings }}
  </div>
</template>
<script>
  export default {
    name: 'Ratings',
    props: {
      product: Object
    },
    methods: {
      rate: function (product, number) {
        product.reviews_count += number
        product.reviews++
        product.ratings = Math.floor((product.reviews_count/product.reviews)*10)/10
      },
    }
  }
  </script>

  <style scoped>
    .gold {
      color: gold;
    }
  </style>