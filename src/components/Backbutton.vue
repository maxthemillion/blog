<template>
    <div class='wrapper flex-h'>
        <div class='content'>
            <router-link :to="dir" tag="a" class="back">&laquo; back </router-link>
        </div>
    </div>
</template>


<script>
export default {
    name: 'Backbutton',
    props:{
        dir: String
    }
}
</script>
