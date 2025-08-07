import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// プラグインの読み込み
import './plugins'

// グローバルミックスインの読み込み
import './mixins'

// グローバルディレクティブの読み込み
import './directives'

// グローバルフィルターの読み込み
import './filters'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app') 