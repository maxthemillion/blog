<template>
    <div class='wrapper flex-h-v sticky'>
        <div v-for="(link, index) in links" :key="index">
            <router-link :to="{name: link.to, params:{catSelected: link.catSelected }}">
                <div class='navbutton' >{{link.label}}</div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: "Navbar",
  data: function() {
    return {
      links: [
        {
          label: "home",
          to: "home"
        },
        { 
          label: 'blog', 
          to:'blog',
          catSelected: "dataViz"
        },
        {
          label: 'about', 
          to:'about'
        } 
      ]
    };
  },
};
</script>

<style lang='scss' scoped>
  .navbutton{
    float:left;
    margin: 0 2rem;
    font-size: $psize;
    font-weight: $pweight;
  }

  .sticky{
    position:fixed;
    }

  .wrapper{
    height: 3rem;
    background:#f1f1f1;
  }
</style>
