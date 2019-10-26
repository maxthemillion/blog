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
        max-width:150px;
        max-height:150px;
        border-radius:50%
    }

</style>

