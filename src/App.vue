<template>
  <div id="app">
    <Navbar />
    <Logo />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Logo from '@/components/Logo.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'app',
  components: {
    Navbar,
    Logo,
    Footer
  }
}
</script>

<style lang='scss'>
@import 'src/styles/main.scss';

  #app{
    display:flex;
    flex-direction:column;
    justify-content: space-between;
    min-height:100vh;
  }

</style>

