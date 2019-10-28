<template>
    <div class='wrapper flex-h-v'>
            <div class='content foto'>
                <div class='centered' id='headline'>
                    <h3>Fotografie</h3>
                </div>
                <div class='centered' id='text'>
                    This is an even longer test.
                </div>
                <div class='centered' id='links'>
                    This is a third test
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:'Foto'
}
</script>

<style scoped>
.wrapper{
    min-height:300px;
}

.centered{
    width: 80%;
    margin: 0 auto;
}

.content{
    max-width: 400px;
}

.foto{
    background:#00dbc2;
    color: white;
    width:100%;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content:space-around;
}

#headline{
    text-align: center;
}

h3{
    margin:0;
}

.text{
    width:95%;
    height:95%;
    margin: auto auto;
}


</style>
