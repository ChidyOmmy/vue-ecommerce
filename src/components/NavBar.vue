<template>
  <ul class="nav nav-pills sticky-top navbar-dark bg-dark p-2 mb-2">
    <li class="nav-item">
      <a href="#" class="nav-link">Shoes</a>
    </li>
    <li class="nav-item">
      <a class="nav-link text-primary" @click="deleteaccount">logout</a>
    </li>
    <li id="cart" class="nav-item position-absolute" data-toggle="modal" data-target="#shoppingcart">
      <i class="fas fa-shopping-cart nav-link active">
        <sup v-show="totalItems" class="badge badge-dark rounded">{{ totalItems }}</sup>
      </i>
    </li>
    <li id="login" class="nav-item position-absolute">
      <router-link to="login" v-if="!authenticated">
        <a class="nav-link">login</a>
      </router-link>
      <router-link to="/profile" v-else-if="authenticated && !is_admin">
        <img :src="user.avatar" class="avatar">
      </router-link>
      <router-link to="/admin" v-if="is_admin">
        <a class="nav-link">Admin</a>
      </router-link>
    </li>
  </ul>
</template>

<script>
  import {
    mapGetters,
    mapActions
  } from 'vuex';
  export default {
    name: "NavBar",
    computed: mapGetters(['cart', 'totalItems', 'user', 'authenticated', 'is_admin']),
    methods: mapActions(['deleteaccount'])
  }
  </script>

  <style scoped>
    #cart {
      width: 30%;
      height: 100%;
    }
    .nav li {
      display: inline-block;
    }
    #cart {
      right: 0px;
      margin: 2px;
    }
    #login {
      right: 25%;
    }
    .avatar {
      width: 35px;
      border-radius: 100%;
      margin: 2px;
    }
  </style>