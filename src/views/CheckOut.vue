<template>
  <div id="CheckOut">
    <div class="row p-2" v-show="!submit">
      <div class="col-md-5" v-if="!authenticated">
        <form class="form-group form-group-control p-2">
          <label for="fullname">Full Name</label>
          <input type="text" class="form-control" v-model="order.fullname" placeholder="full name">
          <label for="address">Address</label>
          <select class="form-control" v-model="order.address">
            <option value="Kinondoni">Kinondoni</option>
            <option value="Kinondoni">Temeke</option>
            <option value="Kinondoni">Ilala</option>
            <option value="Kinondoni">Kigamboni</option>
            <option value="Kinondoni">Ubungo</option>
          </select>
          <label for="email">Email</label>
          <input class="form-control" type="email" v-model="order.email">
          <button type="button" class="btn-success" @click="check">Complete Order</button>
        </form>
      </div>
      <div class="col-md-5" v-else>
        <img :src="user.avatar" class="avatar">
        <h3>{{ user.username }}</h3>
        <button class="btn btn-success" @click="checkoutUser">
          Checkout as {{ user.username }}
        </button>
        <h5>Or</h5>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#fillform">
          Fill Form
        </button>

        <!-- Modal -->
        <div class="modal fade" id="fillform" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div class="modal-body">
                <form class="form-group form-group-control p-2">
                  <label for="fullname">Full Name</label>
                  <input type="text" class="form-control" v-model="order.fullname" placeholder="full name">
                  <label for="address">Address</label>
                  <select class="form-control" v-model="order.address">
                    <option value="Kinondoni">Kinondoni</option>
                    <option value="Kinondoni">Temeke</option>
                    <option value="Kinondoni">Ilala</option>
                    <option value="Kinondoni">Kigamboni</option>
                    <option value="Kinondoni">Ubungo</option>
                  </select>
                  <label for="email">Email</label>
                  <input class="form-control" type="email" v-model="order.email">
                  <button type="button" class="btn-success" @click="check" data-dismiss="modal">Complete Order</button>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-6 m-2">
        <h3 class="diaplay-3">Order Summary</h3>
        <p class="lead">
          You can edit some items and check the total paycheck before you place your order
        </p>
        <table class="table table-responsive table-dark">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Quantity</th>
              <th>Item</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in cart">
              <td>
                <img class="w-100" :src="item.source">
              </td>
              <td>
                <i class="fas fa-sort-up" @click="addToCart(item)"></i>
                <i class="fas fa-sort-down" @click="removeFromCart(item)"></i>
              </td>
              <td>{{ item.quantity }}</td>
              <td>{{ item.title }}</td>
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
      </div>
    </div>
    <div class="container" v-show="submit">
      <div class="jumbotron">
        <h4 class="display-4">Order Completed</h4>
        <p class="lead">
          You will receive a notification in <span class="text-success">24 hours</span>
        </p>
        <router-link to="/">
          <button class="btn btn-primary">Make New Order</button>
        </router-link>
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
    name: "CheckOut",
    data() {
      return {
        submit: false,
        order: {
          fullname: "John Doe",
          address: "Kinondoni",
          email: "johndoe@outlook.com",
          totalPrice: 0,
          completed: false,
          cart: []
        }
      }
    },
    computed: mapGetters(['cart', 'totalPrice', 'authenticated', 'user']),
    methods: {
      checkoutUser: function () {
        if (this.authenticated) {
          this.order.fullname = this.user.username
          this.order.address = this.user.address
          this.order.email = this.user.email
        }
        this.check()
      },
      check: function () {
        this.order.totalPrice = this.totalPrice
        this.order.cart = JSON.parse(JSON.stringify(this.cart))
        this.checkOut(this.order)
        this.clearCart()
        this.submit = !this.submit
      },

      ...mapActions(['addToCart', 'removeFromCart', 'checkOut', 'clearCart'])
    }
  }
  </script>


  <style scoped>
    form {
      border: .5px solid black;
    }
    .avatar {
      width: 200px;
    }
  </style>