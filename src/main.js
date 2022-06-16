import Vue from 'vue'
import LangFlag from 'vue-lang-code-flags';
import App from './App.vue'

// FontAwesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faStar  as farStar} from '@fortawesome/free-regular-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
library.add(farStar)
library.add(faStar)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false
Vue.component('lang-flag', LangFlag);

new Vue({
  
  render: h => h(App),
}).$mount('#app')
