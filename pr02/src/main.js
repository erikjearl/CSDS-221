import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Toasted from 'vue-toasted';

Vue.config.productionTip = false;

Vue.use(Toasted,{
  duration:1500,
});

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app');
