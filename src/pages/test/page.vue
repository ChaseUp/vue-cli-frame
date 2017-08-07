<template>
	<div class="container">
		<p class="test-main">{{msg}}</p>
	</div>
</template>

<script type="text/javascript">
	module.exports = {
		data() {
			return {
				msg: 'this is test page.'
			}
		}
	}
</script>

<style scope>
	.container {
		margin: 50px 0;

		.test-main {
			font-size: 14px;
			color: #666;
			line-height: 30px;
		}
	}
</style>