<template>
  <div>
      <router-view />
    <div class='wrapper flex-h'>
      <div class='content'>
      <router-link :to="{name: 'blog'}" tag="a" class="back">&laquo; Back to blog overview</router-link>
      </div>
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
