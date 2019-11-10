<template>
<div class='wrapper flex-h'>
    <div class='content-narrow flex-v flex-column'>
        <div class='opener'>
            Ich heiße Max. Ich bin...
        </div>
        
        <div class='button-wrapper'>
        <router-link :to="'foto'">
            <div class="boldButton dist foto">Hochzeitsfotograf</div>
        </router-link>

        <router-link :to="'dataViz'">
            <div class="boldButton dist data">DataViz Expert</div>
        </router-link>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "home",
  components: {},
};
</script>


<style scoped>
/* html tag styles */

a {
  width: 100%;
}

/* class styles */ 

.opener{
  font-family:'Raleway', 'Verdana', 'ArialLight', sans-serif;
  font-size: 1.75em;
  margin: 1em 0;
  font-weight:200;
  text-align: center;
}

.boldButton {
  width: 100%;
  border-radius:5px;
  text-align: center;
  color: white;
}

.button-wrapper{
  font-family:'Raleway';
  width:100%;
  font-size: 1.75em;
  font-weight: 400;
}

.data {
  background: #0000c9;
}

.dist{
  line-height: 2em;
  margin: 4px 0;
}

.foto {
  background: #00dbc2;
}

.wrapper{
    height: 20vh;
    min-height:300px;
}
</style>

