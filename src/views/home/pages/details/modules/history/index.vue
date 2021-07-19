<template>
  <div class="details-history">
    <div class="history-menu">
      <div class="menu-fixed">
        <i class="icon el-icon-location-information"></i>
        <span>{{ fixedPage }}</span>
      </div>
      <div class="menu-device">
        <div class="device-name">设备名称</div>
        <div class="device-state">
          <div class="device-type">设备类型</div>
          <div class="device-code">在线</div>
          <div class="device-detalied">一切正常</div>
        </div>
      </div>
      <div class="menu-time">
        <div class="before"></div>
        <ul>
          <li>
            <el-date-picker
              size="mini"
              v-model="selectPtime"
              type="daterange"
              value-format="yyyy-MM-dd"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
              @change="selectionCotentpagesp"
              style="width: 280px !important"
              :picker-options="pickerOptions"
            ></el-date-picker>
          </li>
          <li class="active">今日</li>
          <li>昨日</li>
          <li>近三天</li>
          <li>近一周</li>
          <li>近一月</li>
        </ul>
        <div class="upload">
          <span class="icon el-icon-download"></span>
        </div>
        <div class="after"></div>
      </div>
    </div>
    <div class="history-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-history',
  data: function () {
    return {
      fixedPage: '传感器数据',
      deviceData: {},
      selectPtime: [],
      startTimePage: [],
      endTimePage: [],
      CurrentDate: [],
      starttime: '',
      endtime: '',
      pickerOptions: {
        // 时间选择器组件
        disabledDate (time) {
          // 限制时间必须为之前的时间，未来的时间不可选
          return time.getTime() > Date.now()
        }
      }
    }
  },
  methods: {
    selectionCotentpagesp (val) {
      if (val === null) {
        this.startTimePage = this.CurrentDate
        this.endTimePage = this.CurrentDate
      }
      console.log(val)
      if (this.selectPtime === null || this.selectPtime.length === 0) {
        this.starttime = ''
        this.endtime = ''
      } else {
        this.starttime = this.selectPtime[0]
        this.endtime = this.selectPtime[1]
      }
      this.startTimePage = this.starttime
      this.endTimePage = this.endtime
      //  this.value1 = "";
      // this.withdrawOrderValue();
      console.log('所选择的全部时间', this.selectPtime)
      console.log('开始时间', this.startTimePage)
      console.log('结束时间', this.endTimePage)
    }
  },
  watch: {
    $route: function ({ path }) {
      console.log(path)
      if (path === '/details/history/sensor-data') {
        this.fixedPage = '传感器数据'
      } else if (path === '/details/history/sensor-state') {
        this.fixedPage = '传感器状态'
      } else if (path === '/details/history/battery-state') {
        this.fixedPage = '电池状态'
      } else if (path === '/details/history/host-state') {
        this.fixedPage = '主机状态'
      }
    }
  },
  mounted: function () {
    const path = this.$route.path
    if (path === '/details/history/sensor-data') {
      this.fixedPage = '传感器数据'
    } else if (path === '/details/history/sensor-state') {
      this.fixedPage = '传感器状态'
    } else if (path === '/details/history/battery-state') {
      this.fixedPage = '电池状态'
    } else if (path === '/details/history/host-state') {
      this.fixedPage = '主机状态'
    }
  }
}
</script>

<style lang="less" scoped>
.details-history {
  width: 90%;
  margin: 0 auto;
  color: #89adc0;
  height: 100%;
  font: normal 200 14px/1.5 "宋体";
  .history-menu {
    height: 30px;
    line-height: 30px;
    width: 100%;
    border: 1px solid #89adc0;
    border-width: 5px 0;
    border-image: url(../../../../../../assets/img/border.png) 10 0 16 0;
    margin-bottom: 20px;
    .menu-fixed {
      margin-right: 15px;
      .icon {
        margin-right: 5px;
      }
    }
    .menu-fixed,
    .menu-device {
      float: left;
      .device-name,
      .device-state {
        float: left;
        margin-left: 15px;
        .device-detalied,
        .device-type,
        .device-code {
          float: left;
        }
        .device-detalied,
        .device-code {
          margin-left: 15px;
        }
      }
    }
    .menu-time {
      float: right;
      height: 26px;
      width: 55%;
      margin: 2px 0;
      margin-right: 120px;
      border: 1px solid #68d8fe;
      border-width: 1px 0;
      position: relative;
      ul {
        height: 26px;
        list-style: none;
        margin: 0;
        padding: 0 26px;
        li {
          float: left;
          height: 20px;
          line-height: 20px;
          margin: 2px 5px;
          padding: 0 10px;
          border: 1px solid #0a43bc;
          border-radius: 6px;
          color: #68d8fe;
          .el-date-editor {
            border: 0 none;
            height: 20px;
            padding: 0 0 0 5px;
            background-color: transparent;
            color: #68d8fe;
            /deep/ i,
            /deep/ input,
            /deep/ span {
              color: #68d8fe;
            }
            /deep/ input {
              padding-top: 2px;
              background: transparent;
            }
            /deep/ i,
            /deep/ span {
              line-height: 20px;
            }
            /deep/ input:hover {
              cursor: pointer;
            }
            /deep/ span:hover {
              cursor: pointer;
            }
            /deep/ i:hover {
              cursor: pointer;
            }
          }
          .el-date-editor:hover {
            cursor: pointer;
          }
        }
        li.active {
          background-color: #0a43bc;
        }
        li:first-child {
          margin-right: 15px;
        }
        li:hover {
          cursor: pointer;
        }
      }
      .upload {
        width: 20px;
        height: 20px;
        line-height: 20px;
        border: 1px solid #0a43bc;
        border-radius: 6px;
        text-align: center;
        position: absolute;
        right: 35px;
        top: 2px;
      }
      .upload:hover {
        cursor: pointer;
      }
      .before {
        display: block;
        position: absolute;
        border-top: 15px solid #68d8fe;
        border-left: 10px solid #68d8fe;
        border-right: 13px solid transparent;
        border-bottom: 13px solid transparent;
        left: 0;
        top: -1px;
      }
      .after {
        display: block;
        position: absolute;
        border-top: 13px solid transparent;
        border-left: 13px solid transparent;
        border-right: 10px solid #68d8fe;
        border-bottom: 15px solid #68d8fe;
        right: 0;
        bottom: -1px;
      }
    }
  }
  .history-content {
    width: 100%;
    height: 90%;
  }
}
</style>
