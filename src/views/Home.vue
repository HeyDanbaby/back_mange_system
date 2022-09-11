<template>
  <div id="home">
    <!-- 左边 -->
    <div class="homeLeft">
      <el-card class="userInfoCard">
        <div class="userInfo">
          <!-- 头像 -->
          <el-avatar :size="100"> user </el-avatar>
          <!-- 昵称 -->
          <div class="userName">
            <span>Admin</span>
            <span>美少女战士</span>
          </div>
        </div>
        <div class="loginTime">
          <span>上次登录时间：2011-09-10</span>
          <span>上次登录地点：上海市杨浦区</span>
        </div>
      </el-card>
      <el-card class="tableCard">
        <el-table style="width: 100%" :data="tableData">
          <el-table-column prop="brand" label="课程"> </el-table-column>
          <el-table-column prop="todayBuy" label="节日购买"> </el-table-column>
          <el-table-column prop="mBuy" label="本月购买"> </el-table-column>
          <el-table-column prop="totalBuy" label="总购买"> </el-table-column>
        </el-table>
      </el-card>
    </div>
    <!-- 右边 -->
    <div class="homeRight">
      <!-- 上 -->
      <div class="orderCards">
        <el-card class="orderCard" v-for="item in orderArray" :key="item.id">
          <div class="orderIcon" :style="{ backgroundColor: item.bgc }">
            <i :class="item.icon" style="color: #fff; font-size: 30px"></i>
          </div>
          <div class="orderText">
            <span>￥{{ item.price }}</span>
            <span>{{ item.text }}</span>
          </div>
        </el-card>
      </div>
      <!-- 中 -->
      <el-card class="linCharts">
        <div class="lineChart" ref="lineChartRef"></div>
      </el-card>
      <!-- 下 -->
      <div class="TwoCharts">
        <el-card>
          <div class="columnChart" ref="columnChartRef"></div>
        </el-card>
        <el-card>
          <div class="pieChart" ref="pieChartRef"></div>
        </el-card>
      </div>

      <!-- <el-card class="box-card">
        <div></div>
      </el-card> -->
    </div>
  </div>
</template>

<script>
// 引入Echarts
import * as echarts from "echarts";

export default {
  data() {
    return {
      tableData: [
        {
          id: "001",
          brand: "OPPO",
          todayBuy: 500,
          mBuy: 2500,
          totalBuy: 22000,
        },
        {
          id: "002",
          brand: "vivo",
          todayBuy: 500,
          mBuy: 2500,
          totalBuy: 22000,
        },
        {
          id: "003",
          brand: "小米",
          todayBuy: 500,
          mBuy: 2500,
          totalBuy: 22000,
        },
        {
          id: "004",
          brand: "华为",
          todayBuy: 500,
          mBuy: 2500,
          totalBuy: 22000,
        },
      ],
      orderArray: [
        {
          id: "001",
          icon: "el-icon-success",
          price: 1234,
          bgc: "#0abde3",
          text: "今日支付订单",
        },
        {
          id: "002",
          icon: "el-icon-star-on",
          price: 1200,
          bgc: "#ff9f43",
          text: "今日收藏订单",
        },
        {
          id: "003",
          icon: "el-icon-s-goods",
          price: 12,
          bgc: "#f368e0",
          text: "今日未支付订单",
        },
        {
          id: "004",
          icon: "el-icon-success",
          price: 12900,
          bgc: "#0abde3",
          text: "今日支付订单",
        },
        {
          id: "005",
          icon: "el-icon-star-on",
          price: 1884,
          bgc: "#ff9f43",
          text: "今日收藏订单",
        },
        {
          id: "006",
          icon: "el-icon-s-goods",
          price: 1000,
          bgc: "#f368e0",
          text: "今日未支付订单",
        },
      ],
      LineOption: {
        title: {
          text: "Stacked Line",
        },
        legend: {
          data: ["Union Ads", "Video Ads", "Direct", "Search Engine"],
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      },
      columnOption: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: "bar",
            showBackground: true,
            backgroundStyle: {
              color: "rgba(180, 180, 180, 0.2)",
            },
          },
        ],
      },
      pieOption: {
        title: {
          subtext: "Fake Data",
          left: "center",
        },
        legend: {
          orient: "vertical",
          left: "left",
        },
        series: [
          {
            name: "Access From",
            type: "pie",
            radius: "50%",
            data: [
              { value: 1048, name: "Search Engine" },
              { value: 735, name: "Direct" },
              { value: 580, name: "Email" },
              { value: 300, name: "Video Ads" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      },
    };
  },
  mounted() {
    // 折线图
    const chartDom1 = this.$refs.lineChartRef;
    const myChart1 = echarts.init(chartDom1, "light");
    myChart1.setOption(this.LineOption);
    // 柱状图
    const chartDom2 = this.$refs.columnChartRef;
    const myChart2 = echarts.init(chartDom2, "light");
    myChart2.setOption(this.columnOption);
    // 饼图
    const chartDom3 = this.$refs.pieChartRef;
    const myChart3 = echarts.init(chartDom3, "light");
    myChart3.setOption(this.pieOption);
  },
};
</script>

<style lang="scss" scoped>
// #home {
//   display: flex;
//   box-sizing: border-box;
//   height: calc(100% - 80px);
// }
.homeLeft {
  width: 40%;
  padding: 10px 10px 10px 20px;

  display: flex;
  flex-direction: column;
  .userInfoCard {
    margin-bottom: 20px;
    height: 40%;

    .userInfo {
      display: flex;
      border-bottom: 3px solid #eee;
      margin-bottom: 20px;
      padding-bottom: 20px;
      .userName {
        display: flex;
        flex-direction: column;
        margin-left: 50px;
        justify-content: center;
        span:nth-child(1) {
          font-size: 30px;
        }
        span:nth-child(2) {
          font-size: 13px;
          color: rgb(151, 148, 148);
        }
      }
    }
    .loginTime {
      display: flex;
      flex-direction: column;
      text-align: center;
      font-size: 15px;
      color: rgb(151, 148, 148);
    }
  }
  .tableCard {
    height: 60%;
  }
}
.homeRight {
  width: 60%;
  height: calc(100% - 40px - 20px);
  padding: 10px 20px 10px 10px;
  .orderCards {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 20%;
    .orderCard {
      width: 30%;
      margin-bottom: 10px;
      height: 50px;
      .orderIcon {
        height: 100%;
        width: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .orderText {
        margin-left: 20px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        span:nth-child(1) {
          font-size: 20px;
        }
        span:nth-child(2) {
          font-size: 12px;
          color: rgb(173, 167, 167);
        }
      }
    }
    :deep(.el-card) .el-card__body {
      padding: 0;
      height: 100%;
      display: flex;
    }
  }
  .linCharts {
    height: 40%;
    margin: 20px 0 20px 0;
    .lineChart {
      width: 100%;
      height: 150px;
    }
  }
  .TwoCharts {
    display: flex;
    width: 100%;
    height: 40%;
    :deep(.el-card) .el-card__body {
      padding: 0;
      height: 100%;
      display: flex;
    }
    .el-card {
      width: 100%;
    }
    .columnChart {
      height: 100%;
      width: 100%;
    }
    .pieChart {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
