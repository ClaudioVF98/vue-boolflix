import Vue from 'vue'
import LangFlag from 'vue-lang-code-flags';
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
library.add(faUserSecret)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.component('lang-flag', LangFlag);

new Vue({
  render: h => h(App),
}).$mount('#app')
