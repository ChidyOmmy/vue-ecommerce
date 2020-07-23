<template>
  <div id="Login">
    <div class="container" v-show="!authenticated">
      <h3 class="jumbotron display-3">Login</h3>
      <p class="lead">
        Just enter some username and a random password, this is a test webapp
        Enter <span class="text-info">username: admin, password: admin </span> to log in as admin and manage orders.
      </p>
      <div class="alert alert-warning" v-show="login_error_message">
        {{ login_error_message }}
      </div>
      <form class="form-group" @submit.prevent="log">
        <label for="username">Username</label>
        <input class="form-control" placeholder="Enter Username" v-model="username">
        <label for="password">Password</label>
        <input type="password" placeholder="Enter Password" class="form-control" v-model="password">
        <input type="submit" class="form-control" value="login">
      </form>
    </div>
    <div class="container" v-show="authenticated && !is_admin">
      <div class="jumbotron">
        <h3 class="display-4">Welcome to Shopholic</h3>
        <div class="alert alert-success alert-dismissible fade show" role="alert">
          You're logged in as {{ user.username }}
          <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <router-link to="/">
          <button class="btn btn-primary">
            View some of our products
          </button>
        </router-link>
      </div>
    </div>
    <div class="container" v-show="is_admin">
      <h3>Welcome to Shopholic</h3>
      <p class="lead">
        You're logged in as an admin
      </p>
      <router-link to="/admin">
        <button class="btn btn-info">Manage Orders</button>
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
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
        address: 'Kinondoni',
        email: 'email@gmail.com',
        avatar: 'https://z-m-scontent.fdar4-1.fna.fbcdn.net/v/t1.0-9/82509455_1369653886540167_277963703507222528_n.png?_nc_cat=110&_nc_sid=8024bb&efg=eyJpIjoibyJ9&_nc_eui2=AeGXlW0oCjCeT4kmzsDXo3xV6soE9rF1uBfqygT2sXW4F4w9LTAaY9BAHLl_1vhTogCoKDC7_aWC3k19BBc81tID&_nc_ohc=e031H2DBbnsAX_ElHRf&_nc_ad=z-m&_nc_cid=1436&_nc_eh=508f904a431a9d1391963226d86fabd1&_nc_ht=z-m-scontent.fdar4-1.fna&oh=e359313f25f24af42a78eba9ddd46e78&oe=5F217C16',
      }
    },
    methods: {
      log: function () {
        const loginData = {
          username: this.username,
          password: this.password,
          address: this.address,
          email: this.email,
          avatar: this.avatar
        }
        this.login(loginData)
        localStorage.set('user', JSON.stringify(loginData))
        localStorage.set('authenticated', true)
      },
      ...mapActions(['login'])
    },
    computed: mapGetters (['user', 'authenticated','login_error_message', 'is_admin'])
  }
  </script>