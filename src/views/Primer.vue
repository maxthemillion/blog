<template>
    <div class='wrapper flex-h'>
            <div class='content-narrow' id='foto' >
                <div class='centered flex-h-v' id='headline' :style="{color: this.current.color}">
                    {{this.current.headline}}
                </div>
                <div class='centered flex-h-v' id='text' lang='de'>
                    {{this.current.text}}
                </div>    
                <div class='centered full-width flex-h-v' id='links'>  
                    <div class="grow flex-h-v">            
                        <router-link :to="{name: 'home'}" class="back">
                            &laquo; back 
                        </router-link>
                    </div>
                    <div>
                        <router-link :to="{name: 'blog', params: {catSelected: current.catSelected}}" class="forward grow flex-h-v">       
                            Gallery 
                        </router-link>
                    </div>
                    <div class='grow flex-h-v'>
                      Kontakt
                    </div>
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
    category: function() {
      this.setCategory();
    }
  },
  data() {
    return {
      foto: {
        headline: "Photography",
        text:
          "Ich fotografiere Hochzeiten auf selbstständiger Basis. Bei meinen Hochzeitsreportagen ist mir eine ehrliche, gefühlvolle Bildsprache und eine sehr persönliche Beziehung zu meinen Hochzeitspaaren sehr wichtig.",
        color: "#00dbc2",
        catSelected: "foto"
      },
      dataViz: {
        headline: "Data Viz",
        text:
          "Ich visualisiere Daten in statischen Diagrammen und interaktiven Web Applications. Mich fasziniert dabei besonders die Ästhetik der Darstellungsformen und die Fokussierung auf das Relevante.",
        color: "#0000c9",
        catSelected: "dataViz"
      },
      current: null
    };
  },
  methods: {
    setCategory: function() {
      if (this.category === "foto") {
        this.current = this.foto;
      } else if (this.category === "dataViz") {
        this.current = this.dataViz;
      }
    }
  },
  created: function() {
    this.setCategory();
  }
};
</script>

<style scoped>
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
  background: #d3d3d34d;
  border-radius: 5px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

#headline {
  font-weight:400;
  font-size:1.75em;
  font-family:'Raleway';
  text-align: center;
  flex-grow: 1;
}

#links {
  flex-grow: 1;
}

#text {
  flex-grow: 1;
  text-align: left;
  hyphens: auto;
}
</style>
