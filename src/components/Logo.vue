<template>
    <div class='wrapper'>
        <div class='centering'>
            <router-link :to="{name:'home'}"> 
                <img alt="Vue logo" src="@/assets/logo.png" style="max-width:150px;max-height:150px;" />
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Logo'
}
</script>

<style scoped>
    .wrapper{
        width:100vw;
    }

    .centering{
        width: 150px;
        text-align: center;
        margin: 0 auto;
    }
</style>

