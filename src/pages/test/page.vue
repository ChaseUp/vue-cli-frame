<template>
	<div class="container">
		<p class="test-main">{{msg}}</p>
		<div class="box"></div>
		<tips></tips>
	</div>
</template>

<script type="text/javascript">
	import API from '../../js/API'
	const api = new API();

	export default {
		data() {
			return {
				msg: 'this is test page.'
			}
		},
		mounted() {
			api.getTest({a: 2})
				.then(res => {
					this.msg = res.data.msg;
					globalBus.$emit('loadingHide');
				}).catch(err => {
					console.log(err);
				});
		}
	}
</script>

<style>
	@import "../../css/_reset.css";

	.container {
		padding: 1rem 0;

		.test-main {
			font-size: 17px;
			color: #666;
			height: 0.48rem;
			line-height: 0.48rem;
		}
		.box {
			width: calc(50%+1rem);
			height: 3rem;
			margin: 0 auto;
			background-color: #ccc;
		}
	}
</style>