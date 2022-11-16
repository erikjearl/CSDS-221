
//imports
import vue from 'vue';
import vuetify from 'vuetify';
import app from './App.vue';

//use
vue.use(vuetify);
vue.config.productionTip = false
new Vue({
    router,
    store,
    vuetify,
    render: h => h(App)
}).$mount("#app");

/*
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
*/