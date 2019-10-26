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

<style scoped>
    #logo{
        max-width:100px;
        max-height:100px;
        border-radius:50%
    }

    a:hover{
        opacity:0.8
    }
    .wrapper{
        margin-top:1em;
        margin-bottom:3em;
    }

</style>

