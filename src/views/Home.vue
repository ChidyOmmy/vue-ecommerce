<template>
  <div id="Home">
    <Header></Header>
    <NavBar></NavBar>
    <Layout></Layout>
  </div>
</template>

<script>
  import Header from '@/components/layers/Header.vue';
  import NavBar from '@/components/NavBar.vue';
  import Layout from '@/components/Layout.vue';

  export default {
    name: "Home",
    components: {
      Header,
      NavBar,
      Layout
    }
  }
  </script>