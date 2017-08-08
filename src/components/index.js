import Vue from 'vue'
import Tips from './tips'

Vue.component('tips',Tips);
window.globalBus = new Vue({});

export default Vue;