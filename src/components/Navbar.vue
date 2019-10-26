<template>
    <div class='wrapper flex-h-v sticky'>
        <div v-for="(link, index) in links" :key="index">
            <router-link :to="{name: link.to}">
                <div class='navbutton'>{{link.label}}</div>
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
          label: "blog",
          to: "blog"
        }
      ]
    };
  }
};
</script>

<style scoped>
  .navbutton{
    float:left;
    margin: 0 1em;
  }

  .sticky{
    position:fixed;
    }

  .wrapper{
    height: 3em;
    background:#f1f1f1;
  }
</style>
