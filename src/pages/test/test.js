// import Vue from 'vue'
import Page from './page'
import VueComponents from '../../components'

new VueComponents({
	el: '#app',
	template: '<Page/>',
	components: {Page}
});