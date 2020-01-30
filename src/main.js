import Vue from 'vue'
import App from './App.vue'

import router from "./plugins/router"

import VueHighlightJS from "vue-highlightjs"

import "highlight.js/styles/atom-one-dark.css"
import "@/styles/style.css"

Vue.config.productionTip = false;

Vue.use(VueHighlightJS);

new Vue({
    router,
    render: h => h(App),
}).$mount('#app');
