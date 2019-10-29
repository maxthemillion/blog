<template>
<div class='wrapper flex-h'>
    <div class='content flex-h-v'>
        <div class='dist'>
            <h1>I</h1>
        </div>
        
        <div class='dist'>
            <div class='heart'></div>
        </div>

        <router-link :to="'foto'">
            <div class="boldButton dist foto"><h3>Fotografie</h3></div>
        </router-link>

        <router-link :to="'dataViz'">
            <div class="boldButton dist data"><h3>Data Viz</h3></div>
        </router-link>
    </div>
</div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>


<style scoped>
a {
  width: 100%;
}

.boldButton {
  width: 100%;
  border-radius:5px;
  text-align: center;
  color: white;
}

.content {
  flex-direction: column;
  max-width: 400px;
  width: 100%;
}

.data {
  background: #0000c9;
}

.dist{
  height: 4em;
  line-height: 4em;
  margin: 4px 0;
}

.foto {
  background: #00dbc2;
}

h1, h3 {
  margin: 0 auto;
}

.heart {
  background-color: #dc1a1a;
  display: inline-block;
  height: 30px;
  margin: 0 10px;
  position: relative;
  top: 0;
  transform: rotate(-45deg);
  width: 30px;
}

.heart:before,
.heart:after {
  content: "";
  background-color: #dc1a1a;
  border-radius: 50%;
  height: 30px;
  position: absolute;
  width: 30px;
}

.heart:before {
  top: -15px;
  left: 0;
}

.heart:after {
  left: 15px;
  top: 0;
}

.wrapper{
    height: 50vh;
    min-height:300px;
}
</style>

