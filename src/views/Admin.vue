<template>
  <div id="Admin">
    <div id="adminpanel" class="p2" v-show="is_admin">
      <h1 class="jumbotron">Admin Panel</h1>
      <div class="p-3 m-2" v-if="orders.length">
        <table class="table table-sm table table-hover table-responsive">
          <thead class="thead-dark">
            <tr>
              <th>Full Name</th>
              <th>Address</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders">
              <td>{{ order.fullname }}</td>
              <td>{{ order.address }}</td>
              <td>{{ order.email }}</td>
              <td>
                <router-link to="/order">
                  <a class="text-primary" @click="selectOrder(order)">See more</a>
                </router-link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="p-3 m-2 bg-success" v-else>
        There are no orders left. Good Job 🌟
      </div>
      <router-link to="/">
        <button class="btn btn-info">Back To Home</button>
      </router-link>
    </div>
    <div v-show="!is_admin" class="container">
      <h1 class="jumbotron">Restricted Link</h1>
      <div v-if="authenticated">
        <p class="lead bg-secondary">
          You're not logged in as an admin
          <router-link to="/login">
            <a @click="deleteaccount" class="nav-link">Logout and Login as Admin</a>
          </router-link>
        </p>
      </div>
      <div v-else>
        <p class="bg-secondary">
          You're not logged in
          <router-link to="/login">
            <a class="nav-link">Login as an admin</a>
          </router-link>
        </p>
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
    name: "Admin",
    computed: mapGetters(['orders', 'is_admin', 'authenticated']),
    methods: mapActions(['selectOrder', 'deleteaccount'])
  }

  </script>