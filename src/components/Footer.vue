<template>
    <div class='wrapper flex-h-v'>
        <div class='footer-element'><p>&copy;	Maximilian Rahn - 2019</p></div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.wrapper{
    height:10vh;
    min-height:6em;
    justify-content:space-between;
    background:#f1f1f1;
}

.footer-element{
    margin: 0 2em;
}

p{
    font-size:11px;
}

</style>

