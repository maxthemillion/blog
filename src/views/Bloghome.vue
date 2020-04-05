<template>
  <div>
    <div class="sticky wrapper flex-v flex-column" v-if="!isTagSelected() || !isCatSelected()">
      <div v-if="!isCatSelected()" :style="{background: getCatColor(catSelected)}" class='flex-h filter-row'>
          <div class='tag tag-normal'>category filter:</div>
          <div  class="tag tag-highlight" @click="resetCatSelection()">{{this.catSelected + ' x'}}</div>
      </div> 
      <div v-if="!isTagSelected()" class='flex-h filter-row'>
        <div class='tag tag-normal'>tag filter:</div>
        <div class="tag tag-highlight" @click="resetTagSelection()">{{'#'+this.tagSelected + ' x'}}</div>
      </div>
    </div>  

    <div class="wrapper flex-h">
      <div class="content">
        <div v-for="(section, index) in Object.keys(entries).sort(function ( a, b ) { return b - a; })" :key="index" class="group">
          <h2 class="center">{{section}}</h2>
          <div v-for="entry in entries[section]" :key="entry.id">
            <div class="entry-wrapper" v-if="display(entry.tags, entry.category)">
              <div class="cat" :style="{background: getCatColor(entry.category)}" @click="setCatSelected(entry.cat)">
              </div>
              <div class="entry">
                <h3 class="entry-title">
                  <router-link :to="{name: entry.id}">
                    {{entry.title}}
                  </router-link>
                </h3>
                <div class="entry-subtitle flex-h flex-wrap">
                  <div class="date">{{entry.date}}</div>
                    <div class="tags flex-h-v flex-wrap">
                      <div class="tag tag-normal" v-for="(tag, index) in entry.tags" :key="index" @click="setTagSelected(tag)">
                        {{'#'+tag}}
                      </div>
                    </div>
                  </div>

                  <div class='flex-v flex-column' id='content-wrapper'>
                    <router-link :to="{name: entry.id}">
                    <div 
                      class='img-preview' 
                      v-if="isImageDefined(entry.images[0])" 
                      :style="{ backgroundImage: 'url('+getImgUrl(entry.images[0])+')'}">
                    </div>
                    </router-link>
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
  props: {
      catSelected: String,
  },
  data: function() {
    return {
      tagSelected: "",
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
        var images = require.context("@/assets/images/", false, /\.(jpg|png)$/);
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
<style lang='scss' scoped>

.cat {
  margin-right: 1rem;
  flex: 0 0 4px;
  cursor: pointer;
  border-bottom: 1em solid white;
}

.date {
  font-weight: 500;
  text-align: left;
  font-size:$psize;
}

.entry {
  margin: 1rem 0;
}

.entry-title{
    margin: 0;
}

.entry-subtitle{
  justify-content: space-between;
  width: 100%;
}

.entry-desc {
  flex: 3 1 0;
  align-items: top;
  padding:1em;
  min-width:200px;
  border: #d3d3d34d 1px solid;
  border-radius: 0 0px 5px 5px;
  background: #d3d3d317;
  line-height:1.5;
  font-size:$psize;
}

.entry-wrapper {
  display: flex;
  flex-direction: row;
}

.filter-row {
  padding: 0.25em 0;
  width:100%;
}

.img-preview {
  flex: 4 1 0;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  border: #d3d3d34d 1px solid;
  border-bottom: none;
  border-radius: 5px 5px 1px 1px;
  min-height: 200px;
  min-width:200px;
  background-color: white;
}

.sticky {
  position: sticky;
  top: 3em;
  background-color: #f1f1f1;
}

.tags {
  justify-content: left;
}

.tag {
  padding: 0 0.5rem;
  height: $psize*0.9;
  border-radius: 0.4rem;
  font-size: $psize*0.8;
  font-style: italic;
  margin: 0 0.5rem 0 0;
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
  border: 1px solid $color-primary;
  color: $color-primary;
}

#content-wrapper {
  border-radius:5px;
  align-items: stretch;
  margin-top: 5px;
  flex-wrap:wrap;
}
</style>
