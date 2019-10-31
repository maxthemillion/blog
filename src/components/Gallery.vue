<template>
  <div>
    <gallery :images="imageURLs" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url('+getImgUrl(image)+')'}"
    >
    </div>

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
        index: null,
        imageURLs: null
      };
    },
    components: {
      'gallery': VueGallery
    },
    methods:{
      getImgUrl(image) {
        var images = require.context('@/assets/images/', false, /\.jpg$/)
        return images('./' + image)
      }
    },
    mounted(){
      this.imageURLs = this.images.map(this.getImgUrl)
    }

  }
</script> 
 
<style scoped>
.image {
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius:2px;
  margin:2px;

  display: -moz-inline-stack;
  display: inline-block;
  vertical-align: top;
  *display: inline;

  width:200px;
  height:200px;

  cursor:pointer;
}

.image:hover{
  opacity:0.8;
}
</style> 