import vegaEmbed from 'vega-embed'
import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import Slider from '@jeremyhamm/vue-slider'
require('./assets/css/main.css')

Vue.use(Slider)
Vue.config.productionTip = false

new Vue({
  router,
  vegaEmbed,
  render: h => h(App),
}).$mount('#app')
