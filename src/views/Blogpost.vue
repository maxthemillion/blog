<template>
  <div>
      <router-view />
      <Backbutton :dir="'/blog'" />
  </div>
</template>

<script>
import Backbutton from '@/components/Backbutton.vue'

export default {
  name: "Blogpost",
  locale: "de",
  components: {
    Backbutton
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >

</style>
