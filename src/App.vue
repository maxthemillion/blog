<template>
  <div id="app">
    <Navbar />
    <Logo />

    <router-view/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Logo from '@/components/Logo.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Logo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  text-align: justify
}
</style>