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
              <span class="date">{{entry.date}}</span>
              <div class="tags">
                <div class="tag tag-normal" v-for="(tag, index) in entry.ts" :key="index" @click="setTagSelected(tag)">
                  {{'#'+tag}}
                </div>
              </div>
              <p>{{entry.description}}</p>
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
        dataViz: "#0000c9",
      }
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
  cursor:pointer;
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

.entry-wrapper {
  display: flex;
  flex-direction: row;
}

.sticky {
  position: sticky;
  top: 3em;
  background: antiquewhite;
  height: 1.5em;
}

.tags {
  margin: 0.5em 0;
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
</style>
