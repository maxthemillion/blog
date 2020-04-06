<template>
          <div class="entry-wrapper" v-if="display(this.entry.ts, this.entry.cat)">
            <div class="cat" :style="{background: getCatColor(entry.cat)}" @click="setCatSelected(entry.cat)">
            </div>
            <div class="entry">
              <h3>
                <router-link :to="{name: this.entry.id}">
                  {{this.entry.title}}
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
              <p>{{entry.description}}</p>
            </div>
          </div>
</template>


<script>
export default {
    name: 'Blogpreview',
    props: {
        entry: Object
    }
};
</script>


<style lang='scss' scoped>
.tag{
  font-size: $psize*0.8;
  font-weight: $pweight;
}

</style>
