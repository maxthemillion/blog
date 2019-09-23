<template>
  <div class="blog">
    <router-view />
    <router-link to="/home" tag="a" class="back">&laquo; Back to blog overview</router-link>
  </div>
</template>

<script>
export default {
  name: "Blog",
  locale: 'de'
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" >
body {
 hyphens: auto;
}

.blog {
  max-width: 500px;
  margin: 0px auto;

  /deep/ {
    h1 {
      font-size: 2rem;
      margin-bottom: 0.2rem;
      color: #42b883;
    }

    h2 {
      font-size: 1.5rem;
    }

    p {
      text-align: justify;
    }
  }
}
</style>
