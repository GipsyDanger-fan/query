<template>
  <div class="overall-display">
    <el-container>
      <el-container>
        <el-header style="height: 80px">
          <ul id="show-data">
            <li>
              <div class="card">设备总数</div>
            </li>
            <li>
              <div class="card">在线设备</div>
            </li>
            <li>
              <div class="card">离线设备</div>
            </li>
            <li>
              <div class="card">故障设备</div>
            </li>
            <li>
              <div class="card">离线率</div>
              <el-progress
                class="card"
                :stroke-width="18"
                :text-inside="true"
                :percentage="100"
                status="success"
                :show-text="true"
                >离线率</el-progress
              >
            </li>
            <li>
              <div class="card">故障率</div>
              <el-progress
                class="card"
                :stroke-width="18"
                :text-inside="true"
                :percentage="100"
                status="success"
                :show-text="true"
                >故障率</el-progress
              >
            </li>
          </ul>
        </el-header>

        <el-main>
          <div id="line-charts">
            <div id="disconnect" ref="disconnect">
              <ve-line
                :data="disconnectData"
                :title="disconnectTitle"
                :options="chartOptions"
                :text-style="textStyle"
                height="350px"
              ></ve-line>
            </div>
            <div id="fault" ref="fault">
              <ve-line
                :data="faultData"
                :title="faultTitle"
                :text-style="textStyle"
                height="350px"
              ></ve-line>
            </div>
          </div>
          <div id="map" ref="map">
            <ve-map
              :data="mapData"
              height="700px"
              :text-style="textStyle"
              :title="disconnectTitle"
            ></ve-map>
            <!-- :options="chartOptions" -->
          </div>
        </el-main>
      </el-container>
      <el-aside style="width: 20vw">
        <div id="warning-line">
          <!-- <ul
            class="infinite-list"
            v-infinite-scroll="loadLineList"
            style="overflow: auto"
          >
            <li
              v-for="(item, i) in warningLinelist"
              :key="i"
              class="infinite-list-item"
            >
              {{ item }}
            </li>
          </ul> -->
          <el-table
            :data="warningLinelist"
            :row-style="rowStyle"
            :header-cell-style="{
              'background-color': 'rgba(255, 255, 255, 0.3)',
              color: '#89adc0',
            }"
            :header-row-style="rowStyle"
          >
            <el-table-column prop="date" label="日期" width="100">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="70">
            </el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
        <div id="warning-name">
          <!-- <ul
            class="infinite-list"
            v-infinite-scroll="loadNameList"
            style="overflow: auto"
          >
            <li
              v-for="(item, i) in warningNamelist"
              :key="i"
              class="infinite-list-item"
            >
              {{ item }}
            </li>
          </ul> -->
          <el-table
            :data="warningNamelist"
            :row-style="rowStyle"
            :header-cell-style="{
              'background-color': 'rgba(255, 255, 255, 0.3)',
              color: '#89adc0',
            }"
            :header-row-style="rowStyle"
          >
            <el-table-column prop="date" label="日期" width="100">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="70">
            </el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
        </div>
      </el-aside>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'home-overall',
  data: function () {
    return {
      disconnectData: {
        columns: ['地区', '离线率'],
        rows: [
          { 地区: '山西1', 离线率: 67 },
          { 地区: '河北', 离线率: 50 },
          { 地区: '苏浙', 离线率: 25 },
          { 地区: '山西2', 离线率: 79 },
          { 地区: '山西3', 离线率: 21 },
          { 地区: '山西4', 离线率: 45 }
        ]
      },
      faultData: {
        columns: ['地区', '故障率'],
        rows: [
          { 地区: '山西1', 故障率: 67 },
          { 地区: '河北', 故障率: 50 },
          { 地区: '苏浙', 故障率: 25 },
          { 地区: '山西2', 故障率: 79 },
          { 地区: '山西3', 故障率: 21 },
          { 地区: '山西4', 故障率: 45 }
        ]
      },
      chartOptions: {
        colors: ['#fff']
      },
      faultTitle: {
        textAlign: 'left',
        text: '各地区故障率统计',
        textStyle: {
          fontSize: 12,
          fontWeight: 'normal',
          color: '#89adc0'
        }
      },
      disconnectTitle: {
        textAlign: 'left',
        text: '各地区离线率统计',
        textStyle: {
          fontSize: 12,
          fontWeight: 'normal',
          color: '#89adc0'
        }
      },
      textStyle: {
        color: '#89adc0'
      },
      mapData: {
        columns: ['位置', '正常', '离线', '故障'],
        rows: [
          { 位置: '吉林', 正常: 123, 离线: 123, 故障: 92134 },
          { 位置: '北京', 正常: 1223, 离线: 2123, 故障: 29234 },
          { 位置: '上海', 正常: 2123, 离线: 1243, 故障: 94234 },
          { 位置: '浙江', 正常: 4123, 离线: 5123, 故障: 29234 }
        ]
      },
      warningLinelist: [
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
        }
      ],
      warningNamelist: [
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
        }
      ],
      rowStyle: function ({ rowIndex }) {
        if (rowIndex % 2 === 0) {
          return {
            'background-color': 'rgba(97, 78, 78, 0.1)',
            color: '#89adc0'
          }
        } else {
          return {
            'background-color': 'rgba(255, 255, 255, 0.3)',
            color: '#89adc0'
          }
        }
      }
    }
  },
  methods: {
    disconnectChart: function () {},
    loadLineList () {
      // this.count += 2
    },
    loadNameList () {}
  },
  mounted: function () {
    this.disconnectChart()
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color: rgba(97, 78, 78, 0.1);
  color: #89adc0;
  text-align: center;
  height: 80px;
  border: 1px solid #ccc;
  border-width: 10px 10px 1px 1px;
  border-image: url(../../../../assets/img/leftBox.png) 18 8 2 2;
  #show-data {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      float: left;
      font-size: 20px;
      line-height: 60px;
      .card {
        width: calc(80vw / 6 - 10px);
      }
      .el-progress {
        padding-left: 40px;
        width: calc(80vw / 6 - 90px);
      }
    }
    li:nth-child(5),
    li:nth-child(6) {
      line-height: 40px;
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
      height: calc((100vh - 230px) / 2);
      border: 1px solid #ccc;
      border-width: 2px 2px 10px 10px;
      border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      overflow: hidden;
      .ve-line {
        height: calc((100vh - 230px) / 2) !important;
      }
    }
    #fault {
      margin-top: 30px;
    }
  }
  #map {
    float: left;
    width: calc(80vw - ((100vh - 100px) / 2));
    height: 90%;
    margin: 20px;
    border: 1px solid #ccc;
    border-width: 2px 2px 10px 10px;
    border-image: url(../../../../assets/img/border.png) 20 15 20 25;
    // background: url(../../../../assets/img/地震综合等震线.jpg) no-repeat center;
    background-size: cover;
  }
}
.el-aside {
  background-color: rgba(97, 78, 78, 0.1);
  height: calc(100vh - 81px);
  overflow: hidden;
  #warning-line,
  #warning-name {
    height: calc((100vh - 130px) / 2);
    border: 1px solid #ccc;
    border-width: 2px 2px 10px 10px;
    border-image: url(../../../../assets/img/border.png) 20 15 20 25;
    margin: 10px 0;
    overflow: auto;
    .el-table {
      background: rgba(255, 255, 255, 0.3);
      thead.has-gutter,
      thead.has-gutter tr,
      thead.has-gutter th {
        background: rgba(255, 255, 255, 0.3);
      }
    }
  }
}
</style>
