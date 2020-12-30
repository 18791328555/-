<template>
  <div>
    <div id="myChart" style="width: 100%; height: 500px"></div>
  </div>
</template>
<script>
export default {
  name: "hello",
  data() {
    return {};
  },
  props: ["listProp"],
  mounted() {
    this.drawLine();
    console.log(this.listProp);
  },
  methods: {
    drawLine() {
      window.addEventListener("resize", function () {
        myChart.resize();
      });
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      // 绘制图表
          myChart.setOption({
        title: {
          text: "",
        },
        tooltip: {
          trigger: "axis",
        },
        legend: {
          data: ["销售金额", "销售数量"],
          textStyle: {
            fontSize: 26,
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: [
            "2020-1-1",
            "2020-2-1",
            "2020-3-1",
            "2020-4-1",
            "2020-5-1",
            "2020-6-1",
            "2020-7-1",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "销售金额",
            type: "line",
            stack: "总量",
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "销售数量",
            type: "line",
            stack: "总量",
            data: [220, 182, 191, 234, 290, 330, 710],
          },
        ],
      });
    },
  },
};
</script>
<style>
</style>