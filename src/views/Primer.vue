<template>
    <div class='wrapper flex-h'>
            <div class='content-narrow' id='foto' :style="{background: this.current.color}">
                <div class='centered flex-h-v' id='headline'>
                    <h3>{{this.current.headline}}</h3>
                </div>
                <div class='centered flex-h-v' id='text'>
                    {{this.current.text}}
                </div>    
                <div class='centered full-width flex-h-v' id='links'>  
                    <div class="grow flex-h-v">            
                        <router-link :to="{name: 'home'}" class="back">
                            &laquo; back 
                        </router-link>
                    </div>
                    <div class="grow flex-h-v">
                        <router-link :to="{name: 'blog'}" class="back">
                            blog 
                        </router-link>
                    </div>
                    <div class="grow flex-h-v">gallery</div>
                </div>
            </div>
    </div>
</template>

<script>
export default {
  name: "Primer",
  props: {
    category: String
  },
  watch: {
    category: function(){
      this.setCategory()
    }
  },
  data() {
    return {
      foto: {
        headline: "Fotografie",
        text:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        color: "#00dbc2"
      },
      dataViz: {
        headline: "Data Viz",
        text:
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
        color: "#0000c9"
      },
      current: null
    };
  },
  methods:{
    setCategory: function(){
      if (this.category === "foto"){
          this.current = this.foto
      } else if(this.category === "dataViz"){
          this.current = this.dataViz
      }
    }
  },
  created: function() {
    this.setCategory()
  }
};
</script>

<style scoped>
/* html tag styles */

h3 {
  margin: 0;
}

/* class styles */

.centered {
  width: 80%;
  margin: 0 auto;
  flex-grow: 1;
}

.full-width {
  width: 100%;
  justify-content: space-around;
}

.grow {
  flex-grow: 1;
  height: 100%;
}

.wrapper {
  min-height: 300px;
}

/* id styles */
#foto {
  border-radius: 5px;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#headline {
  text-align: center;
  flex-grow: 1;
}

#links {
  flex-grow: 1;
}

#text {
  flex-grow: 3;
}
</style>
