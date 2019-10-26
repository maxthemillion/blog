<template>
  <div class="wrapper">
      <router-view />

    <div>
      <router-link :to="{name: 'blog'}" tag="a" class="back">&laquo; Back to blog overview</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: "Blogpost",
  locale: "de",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >

</style>
