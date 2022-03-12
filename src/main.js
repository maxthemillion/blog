import vegaEmbed from 'vega-embed'
import * as Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Slider from '@jeremyhamm/vue-slider'

const app = Vue.createApp(App)
app.use(Slider)
app.use(router)

app.mount('#app')
