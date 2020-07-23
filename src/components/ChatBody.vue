<template>
  <div id="ChatBody">
    <header class="header bg-secondary text-light p-3 fixed-top">
      <div class="row header-row">
        <i class="fa fa-arrow-left"></i>
        <img src="../assets/imgs/dera/dera.jpg" class="dp">
        <span class="username">Chidy Ommy</span>
        <i class="fa fa-video"></i><br>
      </div>
      <span class="status">Online</span>
    </header>
    <div class="messageBody">
      <div class="incomming">
        Hello
      </div>
      <template v-for="(message, index) in messages">
        <div class="outgoing">
          {{ message }}
        </div>
        <div class="incomming">
          {{ message }}
        </div>
      </template>
    </div>
    <div class="messageField fixed-bottom">
      <div class="row p-3">
        <i class="fa fa-camera fa-2x"></i>
        <input class="message" v-model="message" @keypress.enter="send">
        <i class="fa fa-paper-plane" @click="send"></i>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: "ChatBody",
    data() {
      return {
        message: '',
        messages: []
      }
    },
    computed: {
      empty() {
        if (this.message == '') {
          return true
        } else {
          return false
        }
      }
    },
    methods: {
      send: function () {
        if (this.message == '') {
          return false
        }
        this.messages.push(this.message)
        this.message = ''
      }
    }
  }
  </script>

  <style scoped>
    .dp {
      width: 50px;
      height: 50px;
      border-radius: 100%;
      margin-left: 5px;
      margin: 3px;
    }
    .username {
      margin: 2px;
      font-family: verdana;
    }
    .fa-video {
      position: absolute;
      margin: 5px;
      right: 0;
    }
    .status {
      color: #999;
      position: relative;
      left: -48px;
      top: -10;
    }
    .header-row {
      padding: 0;
      height: 23px;
    }
    .incomming {
      width: 25%;
      float: left;
      clear: both;
      background-color: #51bd88;
      border-radius: 0px 15px 20px 20px;
      padding: 5px;
      margin: 5px;
    }
    .outgoing {
      width: 25%;
      background-color: #c3d1d2;
      padding: 5px;
      float: right;
      clear: both;
      margin: 5px;
      border-radius: 20px 0px 15px 20px;
    }
    .messageBody {
      padding-bottom: 100px;
    }
    .message, .message:focus {
      outline: none;
      border-radius: 20px 20px;
      margin: 2px;
      padding: 5px;
      font-family: Trebuchet MS;
    }
    .messageField {
      background-color: #5b7981;
      padding: 2px;
    }
    .fa-paper-plane {
      margin: 2px;
      color: white;
    }
  </style>