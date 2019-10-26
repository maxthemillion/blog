<template>
  <div class="wrapper flex-h">
    <div class="content">
      <div v-for="(section, index) in Object.keys(entries).sort(function ( a, b ) { return b - a; })" :key="index" class="group">
        <h2 class="center">{{section}}</h2>
        <div class="section" v-for="entry in entries[section]" :key="entry.id">
          <div class="entry">
            <h3>
              <router-link :to="{name: entry.id}">
              {{entry.title}}
              </router-link>
            </h3>
            <span class="subtitle">{{entry.date}}</span>
            <p>{{entry.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BLOGENTRIES from '@/statics/blogposts.json'
export default {
  name: 'bloghome',
  computed: {
    entries() {
      return BLOGENTRIES
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

h3{
  margin:0
}
.entry {
  margin: 40px 0 0;
}

</style>
