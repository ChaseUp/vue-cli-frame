import axios from 'axios'
import config from './config'

axios.interceptors.request.use(config => {
	console.log('loading');
	globalBus.$emit('loading');
	return config;
},err => {
	return Promise.reject(err);
});

export default class API {
	getTest(param) {
		config.data = Object.assign({},config.data,param);
		return axios.get('./mock/test.json',{},config);
	}
}