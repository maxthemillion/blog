<template>
  <div class="home-wrapper flex-v flex-column">
    <div class="content-narrow">
      <div class="opener">
        <b>MAX RAHN</b>
      </div>
    </div>

    <div class="content-narrow">
      <div class="opener-text">
        Currently supporting customers with
        <span class="text-highlight">advanced data analytics</span> and
        <span class="text-highlight">visualization</span> as data consultant at
        msg systems.
      </div>
    </div>
    <visitbar />
  </div>
</template>

<script>
import visitbar from "@bit/maxthemillion.max-ci.visit-bar";

export default {
  name: "home",
  components: {
    visitbar,
  },
  data() {
    return {
      dataViz: "opener_dataViz.png",
      foto: "opener_foto.jpg",
    };
  },
  methods: {
    getImgUrl(image) {
      var images = require.context("@/assets/opener/", false, /\.(jpg|png)$/);
      return images("./" + image);
    },
  },
};
</script>

<style lang="scss" scoped>
/* html tag styles */

a {
  width: 100%;
}

/* class styles */

.home-wrapper {
  justify-content: space-around;
  min-height: 60vh;
}

.opener {
  font-size: $h3size;
  font-weight: $pweight;
  text-align: center;
}

.opener-text {
  font-size: $h4size;
  font-weight: $pweight;
  line-height: 1.6;
  text-align: center;
}

.boldButton {
  width: 100%;
  border-radius: 5px 5px 0 0;
  text-align: center;
  color: white;
  line-height: 1.35em;
}

.button-wrapper {
  font-family: "Raleway";
  width: 100%;
  font-size: 1.75rem;
  font-weight: 400;
}

.data {
  background: #0000c9;
}

.foto {
  background: #00dbc2;
}

.teaserImage {
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 0.35em;
  border-radius: 5px;
}

.text-highlight {
  color: #0e84ff;
}
</style>
