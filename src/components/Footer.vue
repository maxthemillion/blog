<template>
    <div class='wrapper flex-h-v'>
        <div class='footer-element'><p>&copy; Maximilian Rahn - 2020</p></div>
        <div class='footer-element'><p>Impressum</p></div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style lang='scss' scoped>
.wrapper{
    height:10vh;
    min-height:6em;
    justify-content:space-around;
    background:#f1f1f1;
}

.emphasis{
    font-weight:bold;
    font-size:large!important;
}

.footer-element{
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
}

p{
    font-size:11px;
}

</style>

