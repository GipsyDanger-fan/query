<template>
  <div class="overall-display">
    <el-container>
      <el-container>
        <el-header style="height: 80px">
          <ul id="show-data">
            <li>
              <div class="data all">
                <span class="icon el-icon-s-data"></span>
                {{ deviceData.all }}
              </div>
              <div class="card" @click="pushList('all')">设备总数</div>
            </li>
            <li>
              <div class="data inline">
                <span class="icon el-icon-success"></span>
                {{ deviceData.inline }}
              </div>
              <div class="card" @click="pushList('inline')">在线设备</div>
            </li>
            <li>
              <div class="data outline">
                <span class="icon el-icon-error"></span>
                {{ deviceData.outline }}
              </div>
              <div class="card" @click="pushList('outline')">离线设备</div>
            </li>
            <li>
              <div class="data fault">
                <span class="icon el-icon-warning"></span>
                {{ deviceData.fault }}
              </div>
              <div class="card" @click="pushList('fault')">故障设备</div>
            </li>
            <li>
              <el-progress
                class="card"
                :stroke-width="18"
                :text-inside="true"
                :percentage="outlineRatio"
                status="success"
                :show-text="true"
                :color="customColor"
                >离线率</el-progress
              >
              <div class="card">
                离线率
                <span ref="data_ratio_out">{{ outlineRatio + "%" }}</span>
              </div>
            </li>
            <li>
              <el-progress
                class="card"
                :stroke-width="18"
                :text-inside="true"
                :percentage="faultRatio"
                status="success"
                :show-text="true"
                :color="customColor"
                >故障率</el-progress
              >
              <div class="card">
                故障率
                <span ref="data_ratio_fault">{{ faultRatio + "%" }}</span>
              </div>
            </li>
          </ul>
        </el-header>

        <el-main>
          <div id="line-charts">
            <div id="disconnect" ref="disconnect">
              <div class="bartitie">各地区设备数量统计</div>
              <ve-histogram
                :data="barData"
                :text-style="textStyle"
                height="350px"
                :axisSite="{
                  y: '地区',
                  x: ['设备总数', '舞动传感器', '_传感器'],
                }"
              ></ve-histogram>
            </div>
            <div id="fault" ref="fault">
              <div class="linetitle">各地区离线故障统计</div>
              <ve-line
                :data="outlineFaultData"
                :text-style="textStyle"
                height="350px"
              ></ve-line>
            </div>
          </div>
          <div id="map" ref="map">
            <div class="map-title">
              <div class="title-text"></div>
            </div>
            <ve-map
              :data="mapData"
              height="700px"
              :text-style="textStyle"
              :extend="mapExtend"
              :setting="mapSettings"
            ></ve-map>
            <!-- :options="chartOptions" -->
          </div>
        </el-main>
      </el-container>
      <el-aside style="width: 20vw">
        <div id="warning-name">
          <div id="name-title">
            <div class="title-text">预警名称</div>
            <div class="icon el-icon-full-screen"></div>
          </div>
          <ve-pie :data="pieData" :radius="50"></ve-pie>
        </div>
        <div id="warning-line">
          <div id="line-title">
            <div class="title-text">预警线路</div>
            <div class="icon el-icon-s-order"></div>
          </div>
          <div class="line-table">
            <div class="table-score">
              <div class="table-line-table">
                <ul class="table-title">
                  <li v-for="(item, i) in warningLinelist.key" :key="i">
                    {{ item }}
                  </li>
                </ul>

                <ul class="table-body">
                  <li v-for="(item, i) in warningLinelist.value" :key="i">
                    <span>{{ item.date }}</span>
                    <span>{{ item.name }}</span>
                    <span>{{ item.address }}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
import { DEVICE_DATA } from '@/datas/CONSTANTS'
export default {
  name: 'home-overall',
  data: function () {
    this.mapSettings = {
      position: 'province/shandong',

      selectData: true,

      selectedMode: 'multiple',

      labelMap: {
        name: '地区',

        value: '人口'
      }
    }
    return {
      barData: {
        columns: ['地区', '设备总数', '舞动传感器', '_传感器'],
        rows: [
          { 地区: '山西1', 设备总数: 67, 舞动传感器: 17, _传感器: 50 },
          { 地区: '河北', 设备总数: 50, 舞动传感器: 10, _传感器: 40 },
          { 地区: '苏浙', 设备总数: 25, 舞动传感器: 15, _传感器: 10 },
          { 地区: '山西2', 设备总数: 79, 舞动传感器: 19, _传感器: 60 },
          { 地区: '山西3', 设备总数: 21, 舞动传感器: 11, _传感器: 10 },
          { 地区: '山西4', 设备总数: 45, 舞动传感器: 15, _传感器: 30 }
        ]
      },
      outlineFaultData: {
        columns: ['地区', '离线率', '故障率'],
        rows: [
          { 地区: '山西1', 故障率: 67, 离线率: 47 },
          { 地区: '河北', 故障率: 50, 离线率: 27 },
          { 地区: '苏浙', 故障率: 25, 离线率: 77 },
          { 地区: '山西2', 故障率: 79, 离线率: 27 },
          { 地区: '山西3', 故障率: 21, 离线率: 17 },
          { 地区: '山西4', 故障率: 45, 离线率: 87 }
        ]
      },
      warningLinelist: {
        key: ['时间', '姓名', '地址'],
        value: [
          {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          },
          {
            date: '2016-05-04',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          {
            date: '2016-05-01',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1519 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          },
          {
            date: '2016-05-03',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      },
      mapData: {
        columns: ['位置', '正常', '离线', '故障'],
        rows: [
          { 位置: '吉林', 正常: 123, 离线: 123, 故障: 921 },
          { 位置: '北京', 正常: 122, 离线: 212, 故障: 292 },
          { 位置: '上海', 正常: 212, 离线: 124, 故障: 942 },
          { 位置: '浙江', 正常: 412, 离线: 512, 故障: 292 }
        ]
      },
      mapExtend: {
        visualMap: {
          show: false,

          min: 0, // 最小值

          max: 1000, // 最大值

          calculable: true, // 是否显示拖拽用的手柄（手柄能拖拽调整选中范围）。

          inRange: {
            color: [
              '#0487ED',

              '#C7C52C',

              '#E26B5B',

              '#3EB177',

              '#794EDC',

              '#B46B2A'
            ] // 颜色
          },

          textStyle: {
            color: '#89adc0'
          }
        },

        series: {
          itemStyle: {
            normal: {
              areaColor: 'rgba(11,36,35,.3)',

              borderColor: 'rgba(27, 94, 79, .3)',

              borderWidth: 1
            }
          },

          label: {
            show: true,

            fontSize: 14,

            color: '#fff'
          }
        }
      },
      textStyle: {
        color: '#89adc0'
      },
      pieData: {
        columns: ['预警类型', '正常', '离线', '故障'],
        rows: [
          { 预警类型: '吉林', 正常: 123, 离线: 123, 故障: 92134 },
          { 预警类型: '北京', 正常: 1223, 离线: 2123, 故障: 29234 },
          { 预警类型: '上海', 正常: 2123, 离线: 1243, 故障: 94234 },
          { 预警类型: '浙江', 正常: 4123, 离线: 5123, 故障: 29234 }
        ]
      },

      rowStyle: function ({ rowIndex }) {
        if (rowIndex % 2 === 0) {
          return {
            'background-color': 'rgba(97, 78, 78, 0.1)',
            color: '#89adc0'
          }
        } else {
          return {
            'background-color': 'rgba(255, 255, 255, 0.2)',
            color: '#89adc0'
          }
        }
      },
      deviceData: DEVICE_DATA
    }
  },
  computed: {
    outlineRatio: function () {
      return +(
        ((this.deviceData.outline / this.deviceData.all) * 10000) /
        100
      ).toFixed(2)
    },
    faultRatio: function () {
      return +(
        ((this.deviceData.fault / this.deviceData.all) * 10000) /
        100
      ).toFixed(2)
    }
  },
  methods: {
    disconnectChart: function () {},
    pushList: function (state) {
      this.$router.push('/list' + '?state' + '=' + state)
    },
    customColor: function (ratio) {
      if (ratio > 90) {
        return '#909399'
      } else if (ratio > 50) {
        return '#F56C6C'
      } else if (ratio > 30) {
        return '#E6A23C'
      } else {
        return '#67c23a'
      }
    }
  },
  mounted: function () {
    this.disconnectChart()
    this.$refs.data_ratio_out.style.color = this.customColor(this.outlineRatio)
    this.$refs.data_ratio_fault.style.color = this.customColor(this.faultRatio)
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgba(97, 78, 78, 0.1);
  color: #89adc0;
  text-align: center;
  height: 80px;
  border: 1px solid #89adc0;
  border-width: 10px 10px 1px 1px;
  border-image: url(../../../../assets/img/leftBox.png) 18 8 2 2;
  #show-data {
    list-style: none;
    margin: 0;
    padding: 0;
    height: 80px;
    overflow: hidden;
    li {
      float: left;
      font-size: 20px;
      height: 60px;
      .data {
        padding-top: 5px;
      }
      .card,
      .data {
        width: calc(80vw / 6 - 10px);
        line-height: 30px;
        text-align: center;
        /deep/ .el-icon-warning {
          background-color: crimson;
          border-radius: 50%;
          width: 19px;
          height: 19px;
        }
        /deep/ .el-icon-success {
          background-color: #fff;
          border-radius: 50%;
          width: 19px;
          height: 19px;
        }
      }
      .el-progress {
        padding-left: 40px;
        width: calc(80vw / 6 - 90px);
        /deep/ .el-progress-bar {
          .el-progress-bar__outer {
            background-color: #09446c;
            .el-progress-bar__innerText {
              color: #68d8fe;
              margin: 0 5px 8px 5px;
            }
          }
        }
      }
      .data.all {
        color: #409eff;
      }
      .data.inline {
        color: #67c23a;
      }
      .data.outline {
        color: #909399;
      }
      .data.fault {
        color: #e6a23c;
      }
    }
    li:hover {
      cursor: pointer;
    }
  }
}
.el-main {
  background-color: rgba(97, 78, 78, 0.1);
  overflow: hidden;
  #line-charts {
    margin-top: 10px;
    width: calc((100vh - 230px) / 2);
    height: 100%;
    background-color: rgba(97, 78, 78, 0.1);
    float: left;
    #disconnect,
    #fault {
      height: calc((100vh - 210px) / 2);
      border: 1px solid #ccc;
      border-width: 0px 2px 10px 10px;
      border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      overflow: hidden;
      .ve-line {
        height: calc((100vh - 230px) / 2) !important;
      }
      .linetitle,
      .bartitie {
        font-size: 16px;
        color: #89adc0;
        text-align: center;
        margin-bottom: 10px;
        border: 1px solid #89adc0;
        border-width: 2px 0px 10px 10px;
        border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      }
    }
    #fault {
      margin-top: 30px;
    }
  }
  #map {
    float: left;
    width: calc(80vw - ((100vh - 100px) / 2));
    height: 85%;
    margin: 20px;
    border: 1px solid #89adc0;
    border-width: 2px 2px 10px 10px;
    border-image: url(../../../../assets/img/border.png) 20 15 20 25;
    // background: url(../../../../assets/img/地震综合等震线.jpg) no-repeat center;
    background-size: cover;
    overflow: hidden;
    .map-title {
      height: 60px;
      background: url(../../../../assets/img/map-title.png) -10px 0 no-repeat;
      background-size: cover;
      position: relative;
      .title-text {
        width: 10vw;
        height: 25px;
        top: 20px;
        position: absolute;
        left: 473px;
        border: 1px solid #89adc0;
        border-width: 2px 2px 10px 10px;
        border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      }
    }
  }
}
.el-aside {
  background-color: rgba(97, 78, 78, 0.1);
  height: calc(100vh - 81px);
  overflow: hidden;
  #warning-line,
  #warning-name {
    overflow: hidden;
    height: calc((100vh - 130px) / 2);
    border: 1px solid #89adc0;
    border-width: 0px 2px 10px 10px;
    border-image: url(../../../../assets/img/border.png) 20 15 20 25;
    margin: 10px 0;
    .line-table {
      width: calc(100% - 40px);
      height: calc(100% - 72px);
      padding: 20px;
      .table-score {
        width: 100%;
        height: 100%;
        overflow: auto;
        .table-line-table {
          height: calc((100vh - 230px) / 2);
          .table-title {
            color: #89adc0;
            padding: 0;
            list-style: none;
            height: 30px;
            overflow: hidden;
            margin: 0;
            li {
              text-align: center;
              float: left;
              width: 20%;
            }
            li:first-child {
              margin: 0 2% 0 8%;
            }
            li:last-child {
              width: 40%;
            }
          }
          .table-body {
            color: #89adc0;
            padding: 0 10px 0 10px;
            list-style: none;
            height: calc((100vh - 370px) / 2);
            margin: 0 10px 0 0;
            li {
              height: 20px;
              overflow: hidden;
              margin-bottom: 5px;
              border-bottom: 1px solid #89adc0;
              span {
                float: left;
                font-size: 14px;
                line-height: 1.5;
                width: 17%;
                padding-right: 3%;
              }
              span:first-child {
                width: 30%;
              }
              span:last-child {
                padding: 0;
                width: 45%;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
              }
            }
          }
        }
      }
      .table-score::-webkit-scrollbar {
        width: 15px;
      }
      .table-score::-webkit-scrollbar-track {
        background-color: #89adc0;
        -webkit-border-radius: 18px;
        -moz-border-radius: 18px;
        border-radius: 18px;
      }
      .table-score::-webkit-scrollbar-thumb {
        background: url(../../../../assets/img/background.png) no-repeat center;
        -webkit-border-radius: 18px;
        -moz-border-radius: 18px;
        border-radius: 18px;
      }
    }

    #name-title,
    #line-title {
      height: 20px;
      border: 1px solid #89adc0;
      border-width: 2px 0px 10px 10px;
      border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      font: normal 400 16px/20px "microsoft yahei";
      color: #89adc0;
      .title-text {
        float: left;
      }
      .icon {
        float: right;
        margin: 5px;
      }
    }
  }
}
</style>
