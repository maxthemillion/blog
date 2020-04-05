<template>
<div class='wrapper flex-h'>
    <div class='content-narrow flex-h-v flex-column'>
        <div class='opener'>
            <b>MAX RAHN</b>
            <br>
            <p>Currently supporting customers with <span class='text-highlight'>advanced data analytics</span> and <span class='text-highlight'>visualization</span> as data consultant at msg systems.</p>
        </div>
        
        <visitbar />

        <div class='button-wrapper'>
        <router-link :to="{name: 'blog', params: {catSelected: 'dataViz'}}">
            <div class="teaserImage" :style="{ backgroundImage: 'url('+getImgUrl(dataViz)+')'}"></div>
        </router-link>
        </div>
    </div>
</div>
</template>

<script>
import visitbar from '@bit/maxthemillion.max-ci.visit-bar'

export default {
  name: "home",
  components: {
    visitbar
  },
  data(){
    return{
      dataViz: 'opener_dataViz.png',
      foto: 'opener_foto.jpg'
    }
  },
  methods :{
    getImgUrl(image) {
        var images = require.context('@/assets/opener/', false, /\.(jpg|png)$/)
        return images('./' + image)
      }
   }
};
</script>


<style lang='scss' scoped>
/* html tag styles */

a {
  width: 100%;
}

/* class styles */ 

.opener{
  font-family:'Raleway', 'Verdana', 'ArialLight', sans-serif;
  font-size: 1.75em;
  margin: 1em 0;
  font-weight:400;
  text-align: center;
}

.boldButton {
  width: 100%;
  border-radius:5px 5px 0 0;
  text-align: center;
  color: white;
  line-height: 1.35em;
}

.button-wrapper{
  font-family:'Raleway';
  width:100%;
  font-size: 1.75rem;
  font-weight: 400;
}

.data {
  background: #0000c9;
}

.foto {
  background: #00dbc2;
}

.teaserImage{
  height:200px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  margin-bottom: 0.35em;
  border-radius: 5px;
}

.text-highlight{
  color:#0e84ff;
}

</style>

