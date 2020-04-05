<template>
    <div class='wrapper flex-h-v'>
        <router-link :to="{name:'home'}"> 
            <img alt="Vue logo" src="@/assets/logo.png" id='logo' />
        </router-link>
    </div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style lang='scss' scoped>
    #logo{
        max-width:100px;
        max-height:100px;
        border-radius:50%
    }

    a:hover{
        opacity:0.8
    }
    .wrapper{
        margin-top:3em;
        height:20vh;
        min-height:130px;
    }

</style>

