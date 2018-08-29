import Vue from 'vue'
import App from './App.vue'
import 'vue-awesome/icons/rupee-sign'
import 'vue-awesome/icons/bolt'

import 'bulma/css/bulma.css'


/* Register component with one of 2 methods */

import Icon from 'vue-awesome/components/Icon'

// globally (in your main .js file)
Vue.component('icon', Icon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')
