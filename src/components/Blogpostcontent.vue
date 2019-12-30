<template>
    <div class='wrapper flex-h wrap'>
        <div class="blog content">
            <router-view />
        </div>

        <div v-if="showGallery" class="gallery">
            <Gallery v-bind:images="images"/>
        </div>
    </div>

</template>

<script>
import Gallery from "@/components/Gallery";

export default {
  name: "Blogpostcontent",
  props: {
    images: Array,
    showGallery: Boolean
    },
  data() {
    return {
      content: null,
    };
  },
  components: {
    Gallery
  },
  created() {}
};
</script>


<style lang="scss">
body {
  hyphens: auto;
}

.gallery {
  width: 98%;
  max-width:800px;
  margin: 20px auto;
  overflow: auto;
  text-align: center;
}
</style>