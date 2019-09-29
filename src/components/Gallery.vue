<template>
  <div>
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>
 
<script>
  import VueGallery from 'vue-gallery';
  
  export default {
    props:{
      images: Array
    },
    data: function () {
      return {
        index: null
      };
    },
 
    components: {
      'gallery': VueGallery
    },
  }
</script> 
 
<style scoped>
  .image {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    border: 1px solid #ebebeb;

    display: -moz-inline-stack;
    display: inline-block;
    vertical-align: top;
    *display: inline;

    margin: 0;
  }
</style> 