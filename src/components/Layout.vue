<template>
  <div id="Layout">
    <Cart></Cart>
    <div class="row p-2">
      <div class="col-md-1"></div>
      <ProductsList class="col-md-11"></ProductsList>
    </div>
  </div>
</template>

<script>
  import ProductsList from '@/components/ProductsList.vue';
  import Cart from '@/components/Cart.vue';

  export default {
    name: "Layout",
    components: {
      ProductsList,
      Cart
    }

  }
  </script>