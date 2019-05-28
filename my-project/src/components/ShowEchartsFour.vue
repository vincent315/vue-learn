<style scoped>

</style>
<template>
	<div id="myChart" :style="{width: '300px', height: '300px'}"></div>
</template>
<script>
	export default {
		name: 'showEchartsFour',
		data() {
			return {
				msg: 'Welcome to Your Vue.js App'
			}
		},
		mounted() {
			this.drawLine();
		},
		methods: {
			drawLine() {
				// 基于准备好的dom，初始化echarts实例
				let myChart = this.$echarts.init(document.getElementById('myChart'))
				// 绘制图表
				myChart.setOption({
					title: {
						text: 'echarts组件'
					},
					tooltip: {},
					xAxis: {},
					yAxis: {},
					series: [{
						symbolSize: 20,
						data: [
							[10.0, 8.04],
							[8.0, 6.95],
							[13.0, 7.58],
							[9.0, 8.81],
							[11.0, 8.33],
							[14.0, 9.96],
							[6.0, 7.24],
							[4.0, 4.26],
							[12.0, 10.84],
							[7.0, 4.82],
							[5.0, 5.68]
						],
						type: 'scatter'
					}]
				});
			}
		}
	}
</script>
