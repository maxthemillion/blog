<template>
  <div>
  <div class="sticky wrapper flex-h-v" v-if="!isSelected()">
      <div class='tag tag-normal'>tag-filtering active:</div><div class="tag tag-highlight" @click="resetSelection()">{{'#'+this.selected + ' x'}}</div>
  </div>  
  <div class="wrapper flex-h">
    <div class="content">
      <div v-for="(section, index) in Object.keys(entries).sort(function ( a, b ) { return b - a; })" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry" v-if="display(entry.ts)">
            <h3>
              <router-link :to="{name: entry.id}">
                {{entry.title}}
              </router-link>
            </h3>
            <span class="date">{{entry.date}}</span>
            <div class="tags">
              <div class="tag tag-normal" v-for="(tag, index) in entry.ts" :key="index" @click="setSelected(tag)">
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
</template>

<script>
import BLOGENTRIES from "@/statics/blogposts.json";
export default {
  name: "bloghome",
  data: function() {
    return {
      selected: ""
    };
  },
  methods: {
    setSelected(selection) {
      this.selected = selection;
    },
    display(tags) {
      if (!this.selected || tags.includes(this.selected)) {
        return true;
      } else {
        return false;
      }
    },
    isSelected() {
      return !this.selected;
    },
    resetSelection() {
      this.selected = "";
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

.sticky {
  position: sticky;
  top: 3em;
  background:antiquewhite;
  height:1.5em;
}

.tags {
  margin: 0.5em 0;
  display: flex;
  justify-content: left;
}

.tag{
  padding: 0 0.5em;
  height: 1.3em;
  border-radius: 0.4em;
  font-size: 0.7em;
  font-style: italic;
  margin-right: 0.5em;
  cursor: pointer;
  background:white;
}

.tag:hover{
  opacity:0.5;
}

.tag-normal {
  border: 1px solid lightgrey;
}

.tag-highlight{
  border: 1px solid #0e84ff;
  color: #0e84ff;
}
</style>
