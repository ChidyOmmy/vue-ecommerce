<template>
  <div id="Order">
    <div v-show="completed" class="container bg-primary jumbotron text-light">
      <h1>Order Completed</h1>
      <router-link to="/admin">
        <button class="btn btn-secondary">Manage More Orders</button>
      </router-link>
    </div>
    <div v-if="order.fullname" v-show="!completed" class="container">
      <div class="jumbotron mb-5">
        <h1>{{ order.fullname }}'s order</h1>
      </div>
      <div class="m-2">
        <table class="table table-dark table-responsive">
          <thead>
            <tr>
              <th></th>
              <th>Quantity</th>
              <th>Item</th>
              <th>price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in order.cart" :key="index">
              <td>
                <img :src="item.source" class="table-img">
              </td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.title }}</td>
              <td>$ {{ item.price }}</td>
              <td>${{ item.price  * item.quantity }}</td>
            </tr>
            <tr>
              <td>Total</td>
              <td colspan="3"></td>
              <td>$ {{ order.totalPrice }}</td>
            </tr>
          </tbody>
        </table>
        <button class="btn btn-success" @click="ship(order)">Mark Order Shipped</button>
      </div>
    </div>
    <div v-else class="container lead">
      The link You have followed is broken
      <router-link to="/">
        <button class="btn btn-info">Home</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    name: "Order",
    data(){
      return {
        completed: false
      }
    },
    computed: mapGetters(['order', 'order_message']),
    methods:{
      ship: function (order){
        this.completed = true
        this.shipped()
      },
    ...mapActions(['shipped'])
    } 
  }
  </script>

  <style scoped>
    .table-img {
      width: 50px;
      max-height: 50px;
    }
  </style>