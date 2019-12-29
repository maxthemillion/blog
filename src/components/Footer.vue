<template>
    <div class='wrapper flex-h-v'>
        <div class='footer-element'><p>&copy; Maximilian Rahn - 2019</p></div>
        <div class='footer-element emphasis'><a href="mailto:max@maxrahn.eu?body=Hallo%20Max,%0D%0A%0D%0Aich%20möchte%20gerne%20ein%20unverbindliches%20Angebot%20für%20...">Buche mich!</a></div>
        <div class='footer-element'><p>Impressum</p></div>
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

