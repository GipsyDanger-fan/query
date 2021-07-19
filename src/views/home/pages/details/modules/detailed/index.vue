<template>
  <div class="details-detailed">
    <!-- <div class="details-name">

    </div> -->
    <div class="details-massage">
      <div class="massage-title">
        <i class="icon el-icon-document-copy"></i>
        基本信息
      </div>
      <div class="message-msg">
        <div class="msg-text">设备名称</div>
        <div class="msg-state">
          <div class="state-type">设备类型</div>
          <div class="state-code">在线</div>
          <div class="state-detalied">一切正常</div>
        </div>
        <div class="msg-state" v-if="false">
          <div class="state-code">离线</div>
          <div class="state-detalied">离线原因</div>
        </div>
        <div class="msg-state" v-if="false">
          <div class="state-code">故障</div>
          <div class="state-detalied">故障原因</div>
        </div>
      </div>
      <div class="massage-table">
        <el-row type="flex">
          <el-col :span="6">设备编号</el-col>
          <el-col :span="6">设备协议</el-col>
          <el-col :span="6">设备类型</el-col>
          <el-col :span="6">视频播放</el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="12">所属组织</el-col>
          <el-col :span="12">传感器类型</el-col>
        </el-row>
        <el-row type="flex">
          <el-col :span="6">创建者</el-col>
          <el-col :span="6">创建时间</el-col>
          <el-col :span="6">最后修改者</el-col>
          <el-col :span="6">最后修改时间</el-col>
        </el-row>
      </div>
    </div>

    <div class="details-state">
      <div class="state-title">
        <i class="icon el-icon-s-operation"></i>
        运行状态
      </div>
      <div class="state-chart">
        <ve-line
          :data="electricState"
          :text-style="textStyle"
          height="300px"
        ></ve-line>

        <ve-line
          :data="hostState"
          :text-style="textStyle"
          height="200px"
        ></ve-line>
      </div>
    </div>
    <div class="details-line">
      <div class="line-title">
        <i class="icon el-icon-sort"></i>
        上下线状态
      </div>
      <div class="line-table">
        <el-row type="flex">
          <el-col :span="12">设备状态</el-col>
          <el-col :span="12">上线时间</el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'details-detailed',
  data: function () {
    return {
      electricState: {
        columns: ['时间', '电量', '电压'],
        rows: [
          { 时间: '吉林', 电量: 123, 电压: 123 },
          { 时间: '北京', 电量: 1223, 电压: 2123 },
          { 时间: '上海', 电量: 2123, 电压: 1243 },
          { 时间: '浙江', 电量: 4123, 电压: 5123 }
        ]
      },
      hostState: {
        columns: ['时间', '信号', '上下线'],
        rows: [
          { 时间: '吉林', 信号: 0, 上下线: 0 },
          { 时间: '北京', 信号: 1, 上下线: 1 },
          { 时间: '上海', 信号: 0, 上下线: 2 },
          { 时间: '浙江', 信号: 1, 上下线: 0 }
        ]
      },
      textStyle: {
        color: '#89adc0'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.details-detailed {
  width: 90%;
  margin: 0 auto;
  color: #89adc0;
  height: 100%;
  .details-massage,
  .details-state,
  .details-line {
    margin-bottom: 35px;
    .message-msg {
      height: 35px;
      overflow: hidden;
      font: normal 400 16px/1.8 "宋体";
      .msg-text,
      .msg-state,
      .msg-state .state-code,
      .msg-state .state-type,
      .msg-state .state-detalied {
        float: left;
        margin-right: 10px;
      }
    }
    .massage-title,
    .state-title,
    .line-title {
      font: normal 400 18px/1.5 "宋体";
      margin-bottom: 15px;
    }
    .massage-table {
      .el-row {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        .el-col {
          border: 1px solid #89adc0;
          border-radius: 5px;
          margin-right: 10px;
          padding-left: 10px;
          font: normal 200 14px/1.8 "宋体";
          &:last-child {
            margin: 0;
          }
        }
      }
    }
    .line-table {
      padding-bottom: 60px;
      .el-row {
        margin-bottom: 10px;
        &:last-child {
          margin-bottom: 0;
        }
        .el-col {
          border: 1px solid #89adc0;
          border-radius: 5px;
          margin-right: 10px;
          padding-left: 10px;
          font: normal 200 14px/1.8 "宋体";
          &:last-child {
            margin: 0;
          }
        }
      }
    }
  }
}
</style>
