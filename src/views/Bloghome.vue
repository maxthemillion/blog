<template>
  <div>
  <div class="sticky wrapper flex-h-v" v-if="!isTagSelected() || !isCatSelected()">
      <div v-if="!isTagSelected()" class='tag tag-normal'>tag-filtering active:</div>
      <div v-if="!isTagSelected()" class="tag tag-highlight" @click="resetTagSelection()">{{'#'+this.tagSelected + ' x'}}</div>
      <div v-if="!isCatSelected()" class='tag tag-normal'>category-filtering active:</div>
      <div v-if="!isCatSelected()" class="tag tag-highlight" @click="resetCatSelection()">{{this.catSelected + ' x'}}</div>
  </div>  

  <div class="wrapper flex-h">
    <div class="content">
      <div v-for="(section, index) in Object.keys(entries).sort(function ( a, b ) { return b - a; })" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div v-for="entry in entries[section]" :key="entry.id">
          <div class="entry-wrapper" v-if="display(entry.ts, entry.cat)">
            <div class="cat" :style="{background: getCatColor(entry.cat)}" @click="setCatSelected(entry.cat)">
            </div>
            <div class="entry">
              <h3>
                <router-link :to="{name: entry.id}">
                  {{entry.title}}
                </router-link>
              </h3>
              <div class="flex-h-v">
                <div class="date">{{entry.date}}</div>
                  <div class="tags">
                    <div class="tag tag-normal" v-for="(tag, index) in entry.ts" :key="index" @click="setTagSelected(tag)">
                      {{'#'+tag}}
                    </div>
                  </div>
                </div>

                <div class='flex-h-v column' id='content-wrapper'>
                  <div 
                    class='img-preview' 
                    v-if="isImageDefined(entry.images[0])" 
                    :style="{ backgroundImage: 'url('+getImgUrl(entry.images[0])+')'}">
                  </div>
                  <div class='entry-desc'>
                    {{entry.description}}
                  </div> 
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import BLOGENTRIES from "@/statics/blogposts.json";
export default {
  name: "bloghome",
  data: function() {
    return {
      tagSelected: "",
      catSelected: "",
      colorDict: {
        foto: "#00dbc2",
        dataViz: "#0000c9"
      },
      imageURLs: null
    };
  },
  methods: {
    setTagSelected(selection) {
      this.tagSelected = selection;
    },
    setCatSelected(selection) {
      this.catSelected = selection;
    },
    display(tags, cat) {
      if (
        (!this.tagSelected && !this.catSelected) ||
        (!this.catSelected && tags.includes(this.tagSelected)) ||
        (!this.tagSelected && cat === this.catSelected) ||
        (tags.includes(this.tagSelected) && cat === this.catSelected)
      ) {
        return true;
      } else {
        return false;
      }
    },
    isTagSelected() {
      return !this.tagSelected;
    },
    isCatSelected() {
      return !this.catSelected;
    },
    resetTagSelection() {
      this.tagSelected = "";
    },
    resetCatSelection() {
      this.catSelected = "";
    },
    getCatColor(cat) {
      return this.colorDict[cat];
    },
    getImgUrl(image) {
      if (this.isImageDefined(image)) {
        var images = require.context("@/assets/images/", false, /\.jpg$/);
        return images("./" + image);
      }
    },
    isImageDefined(image){
      return (typeof image !== "undefined")
    }
  },
  computed: {
    entries() {
      return BLOGENTRIES;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cat {
  margin-right: 1em;
  flex: 0 0 4px;
  cursor: pointer;
  border-bottom: 1em solid white;
}

.date {
  font-size: 0.8em;
  font-weight: 500;
}

h3 {
  margin: 0;
}
.entry {
  margin: 1em 0;
}

.entry-desc {
  flex: 3 1 0;
  align-items: top;
  padding:1em;
  min-width:200px;
}

.entry-wrapper {
  display: flex;
  flex-direction: row;
}

.img-preview {
  flex: 4 1 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border-radius: 5px 1px 1px 5px;
  min-height: 200px;
  min-width:200px;
}

.sticky {
  position: sticky;
  top: 3em;
  background: antiquewhite;
  height: 1.5em;
}

.tags {
  margin: 0 1em;
  display: flex;
  justify-content: left;
}

.tag {
  padding: 0 0.5em;
  height: 1.3em;
  border-radius: 0.4em;
  font-size: 0.7em;
  font-style: italic;
  margin-right: 0.5em;
  cursor: pointer;
  background: white;
}

.tag:hover {
  opacity: 0.5;
}

.tag-normal {
  border: 1px solid lightgrey;
}

.tag-highlight {
  border: 1px solid #0e84ff;
  color: #0e84ff;
}

#content-wrapper {
  border-radius:5px;
  align-items: stretch;
  margin-top: 5px;
  background: #d3d3d34d;
  flex-wrap:wrap;
}
</style>
