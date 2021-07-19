<template>
  <div class="details-state">
    <div class="details-name">
      <div class="name-text">设备名称</div>
      <div class="name-state">
        <div class="state-type">设备类型</div>
        <div class="state-code">在线</div>
        <div class="state-detalied">一切正常</div>
      </div>
      <!-- <div class="name-state" v-if>
        <div class="state-code">离线</div>
        <div class="state-detalied">离线原因</div>
      </div>
      <div class="name-state" v-if>
        <div class="state-code">故障</div>
        <div class="state-detalied">故障原因</div>
      </div> -->
    </div>
    <div class="details-host">
      <div class="host-title">
        <i class="icon el-icon-s-platform"></i>
        主机状态
      </div>
      <div class="host-table">
        <table>
          <tr>
            <th>属性</th>
            <th>最新数据</th>
            <th>最新数据上传时间</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr>
            <th>主机电压</th>
            <th>- - -</th>
            <th>2021-07-09 09:01:52</th>
            <th>- - -</th>
            <th>更多历史数据</th>
          </tr>
          <tr>
            <th>主机电流</th>
            <th>- - -</th>
            <th>2021-07-09 09:01:52</th>
            <th>- - -</th>
            <th>更多历史数据</th>
          </tr>
          <tr>
            <th>主机电量</th>
            <th>- - -</th>
            <th>2021-07-09 09:01:52</th>
            <th>- - -</th>
            <th>更多历史数据</th>
          </tr>
        </table>
      </div>
    </div>
    <div class="details-sensor">
      <div class="sensor-dance">
        <div class="dance-title">
          <i class="icon el-icon-s-marketing"></i>
          舞动特征量
        </div>
        <div class="dance-table">
          <table>
            <tr>
              <th>属性</th>
              <th>最新数据</th>
              <th>最新数据上传时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
      <div class="sensor-weather">
        <div class="weather-title">
          <i class="icon el-icon-wind-power"></i>
          微气象
        </div>
        <div class="weather-table">
          <table>
            <tr>
              <th>属性</th>
              <th>最新数据</th>
              <th>最新数据上传时间</th>
              <th>状态</th>
              <th>操作</th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-state',
  data: function () {
    return {
      hostStateList: [],
      danceStateList: [],
      weatherStateList: []
    }
  },
  methods: {
    getHostStateList: function () {},
    getDanceStateList: function () {},
    getWeatherStateList: function () {}
  },
  mounted: function () {
    // this.getHostStateList()
    // this.getDanceStateList()
    // this.getWeatherStateList()
  }
}
</script>

<style lang="less" scoped>
.details-state {
  width: 94%;
  margin: 0 auto;
  padding-top: 20px;
  color: #89adc0;
  .details-name {
    height: 60px;
    overflow: hidden;
    .name-text,
    .name-state,
    .name-state .state-code,
    .name-state .state-type,
    .name-state .state-detalied {
      float: left;
      margin-right: 10px;
    }
  }
  .host-title,
  .dance-title,
  .weather-title {
    font: normal 400 18px/1.5 "宋体";
    margin-bottom: 15px;
  }

  .host-table,
  .dance-table,
  .weather-table {
    border: 1px solid #89adc0;
    padding: 10px;
    margin-bottom: 40px;
    table {
      width: 100%;
      border-spacing: 5px;
      tr {
        font: normal 300 14px/1.5 "宋体";
        th {
          border: 1px solid #89adc0;
          border-radius: 5px;
          height: 24px;
        }
        th:nth-child(4),
        th:nth-child(5) {
          width: 10%;
        }
        th:nth-child(1),
        th:nth-child(3) {
          width: 15%;
        }
        th:nth-child(2) {
          width: 50%;
        }
        th:nth-child(5) {
          color: #00d5ff;
        }
        th:nth-child(5):hover {
          cursor: pointer;
        }
      }
      tr:first-child {
        th:nth-child(5) {
          color: #89adc0;
        }
      }
    }
  }
}
</style>
