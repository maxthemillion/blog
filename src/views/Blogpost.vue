<template>
  <div class="wrapper">
    <div class="blog">
      <router-view />
    </div>
    <div class="gallery">
      <Gallery v-bind:images="images"/>
    </div>
    <div>
      <router-link to="/blog" tag="a" class="back">&laquo; Back to blog overview</router-link>
    </div>
  </div>
</template>

<script>
import Gallery from "@/components/Gallery";

export default {
  name: "Blogpost",
  locale: "de",
  components: {
    Gallery
  },
  mounted(){
    this.images = this.imageDir+this.$route.path
  },
  data() {
    return {
      imageDir: "../images",
      images: []
    };
  }
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

.gallery {
  width: 98%;
  margin: 20px auto;
  overflow: auto;
}
</style>
