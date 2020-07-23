<template>
  <div id="Profile">
    <div class="container" v-if="authenticated">
      <div class="jumbotron bg-primary text-light">
        <img :src="user.avatar" class="avatar">
        <h4 class="text-light">{{ user.username }}</h4>
        <small>📍{{ user.address }}, Dar es Salaam</small>
      </div>
      <div class="overlay p-2 bg-light">
        Some crazy ass stuffs
      </div>
      <div class="btn-group">
        <button class="btn btn-sm btn-primary" data-toggle="collapse" data-target="#form">Edit Info</button>
        <router-link to="/checkout" class="btn btn-sm btn-primary">
          Check Out
        </router-link>
        <button class="btn btn-sm btn-primary" @click="deleteAc">Delete Account</button>
      </div>
      <form id="form" class="fade collapse form m-2 p-2" @submit.prevent="updateInfo">
        <label for="username">Username</label>
        <input class="form-control" placeholder="John Doe" v-model="username">
        <label for="address">address</label>
        <select class="form-control" v-model="address">
          <option value="Kinondoni">Kinondoni</option>
          <option value="Temeke">Temeke</option>
          <option value="Kigamboni">Kigamboni</option>
          <option value="Ilala">Ilala</option>
          <option value="Ubungo">Ubungo</option>
        </select>
        <label for="email">Email</label>
        <input class="form-control" placeholder="email@email.com" type="text" v-model="email">
        <label for="cardnumber">Card Number</label>
        <input type="number" placeholder="000-111-222-333" class="form-control" v-model="cardnumber">
        <label for="password">Password</label>
        <input type="password" placeholder="******" class="form-control" v-model="password">
        <button class="btn btn-primary">Update Info</button>
      </form>
    </div>
    <div class="container" v-else>
      <p class="lead">
        You must be logged in to edit your profile
      </p>
      <router-link to="/login">
        <button class="btn btn-info">Login</button>
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
    name: "Profile",
    data() {
      return {
        username: '',
        password: '',
        email: '',
        cardnumber: '',
        address: 'Kinondoni'
      }
    },
    computed: mapGetters(['authenticated', 'user']),
    methods: {
      updateInfo: function () {
        const user = {
          username: this.username,
          password: this.password,
          email: this.email,
          cardnumber: this.cardnumber,
          address: this.address,
          avatar: this.user.avatar
        };
        this.updateUserInfo(user)
      },
      deleteAc: function () {
        if (confirm('Delete Account')) {
          this.deleteaccount()
          this.clearCart()
        }
      },
      ...mapActions(['updateUserInfo', 'deleteaccount', 'clearCart'])
    }
  }
  </script>

  <style scoped>
    .avatar {
      width: 100px;
      border-radius: 100%;
    }
    .overlay {
      width: 80%;
      position: relative;
      left: 12%;
      top: -50px;
      border-radius: 3px;
      box-shadow: 3px 2px grey;
    }
    form {
      border: .5px solid grey;
      box-shadow: 3px 2px grey;
      background-image: url('https://z-m-scontent.fdar6-1.fna.fbcdn.net/v/t1.0-0/cp0/e15/q65/p480x480/14364711_658160204359314_1254742250376995585_n.jpg?_nc_cat=102&_nc_sid=2d5d41&efg=eyJpIjoibyJ9&_nc_eui2=AeHU6MjWjeifYqfIQ8MP2B9lTkl4vd4_AVBOSXi93j8BUC_HRxyXkjdQtAd7lM6Rg3DsUuyo0k78j0ch2UC4UD-y&_nc_ohc=11aQKh-Sn5AAX_YjkS1&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar6-1.fna&_nc_tp=3&oh=15938499b96a2db6fae01abebadc92b6&oe=5F21E28E');
    }
    label {
      color: white;
    }
    input {
      border-left: 5px solid green;
      margin: 2px;
    }
  </style>