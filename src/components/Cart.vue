<template>
  <div id="Cart">
    <div class="modal fade" id="shoppingcart" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
              <template v-if="totalItems">
                {{ totalItems }} in cart
              </template>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <template v-if="totalItems">
              <button class="btn btn-small" @click="clearCart">Clear Cart</button>
              <table class="table table-dark table-responsive">
                <thead>
                  <tr>
                    <th scope="col"></th>
                    <th scope="col"></th>
                    <th scope="col">Item</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Price</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="item in cart">
                    <td>
                      <img :src="item.source" class="table-img">
                    </td>
                    <td>
                      <i class="fas fa-sort-up" @click="addToCart(item)"></i><br>
                      <i class="fas fa-sort-down" @click="removeFromCart(item)"></i>
                    </td>
                    <td>{{ item.title }}</td>
                    <td>{{ item.quantity }}</td>
                    <td>${{ item.price }}</td>
                    <td>${{ item.price * item.quantity }}</td>
                  </tr>
                  <tr>
                    <td>Total</td>
                    <td colspan="4"></td>
                    <td>${{ totalPrice }}</td>
                  </tr>
                </tbody>
              </table>
            </template>
            <template v-else>
              <h5>No items added to cart</h5>
            </template>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <router-link to="/checkout" v-if="totalItems">
              <button type="button" class="btn btn-success" data-dismiss="modal">Checkout</button>
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

  export default {
    name: "Cart",
    computed: mapGetters(['cart', 'totalPrice', 'totalItems']),
    methods: mapActions(['addToCart', 'removeFromCart', 'clearCart'])
  }
  </script>

  <style scoped>
    .table-img {
      width: 50px;
      height: auto;
      max-height: 50px;
      min-height: 50px;
      border-radius: 100%;
    }
  </style>