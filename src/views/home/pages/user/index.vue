<template>
  <div class="home-user">
    <div class="user-setting">
      <div class="icon el-icon-user-solid"></div>
      <div class="user-setting-title">用户信息</div>
      <el-divider content-position="left"
        ><div class="icon el-icon-s-tools"></div
      ></el-divider>
      <ul class="user-setting-content">
        <li>
          <div class="icon el-icon-user"></div>
          <div class="usermsg">
            用 户 名: <span class="userdata">电科院网关</span>
          </div>
        </li>
        <li>
          <div class="icon el-icon-s-order"></div>
          <div class="usermsg">
            登录账号: <span class="userdata">dkywg</span>
          </div>
        </li>
        <li>
          <div class="icon el-icon-collection-tag"></div>
          <div class="usermsg">
            所属组织: <span class="userdata">电科院网关</span>
          </div>
        </li>
        <li>
          <div class="icon el-icon-s-check"></div>
          <div class="usermsg">
            用户角色: <span class="userdata">ROLE_USER</span>
          </div>
        </li>
        <li>
          <div class="icon el-icon-phone-outline"></div>
          <div class="usermsg">
            联系电话: <span class="userdata">电科院网关</span>
          </div>
        </li>
        <li>
          <div class="icon el-icon-unlock"></div>
          <div class="usermsg">
            密 &nbsp; 码: <span class="userdata">电科院网关</span>
          </div>
        </li>
        <li class="last"></li>
      </ul>
    </div>

    <div class="page-setting">
      <div class="icon el-icon-document"></div>
      <div class="page-setting-title">页面信息</div>
      <el-divider content-position="left"
        ><div class="icon el-icon-s-tools"></div
      ></el-divider>

      <div class="page-setting-content">
        <div class="lis">
          <div class="icon el-icon-notebook-2"></div>
          <div class="page-lines">
            每页显示条数<el-input-number
              v-model="lineNum"
              controls-position="right"
              @change="handleChange"
              :min="1"
            ></el-input-number>
          </div>
        </div>
        <div class="lis">
          <div class="icon el-icon-set-up"></div>
          <div class="page-pattern">
            数据显示模式
            <el-radio v-model="pattern" label="new">最新数据</el-radio>
            <el-radio v-model="pattern" label="all">全部数据</el-radio>
          </div>
        </div>
        <div class="lis">
          <div class="hood">
             <el-button type="primary" @click="hoodPage">保存</el-button>
          </div>
        </div>
        <div class="last"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home-user',
  data: function () {
    return {
      lineNum: 1,
      pattern: 'all'
    }
  },
  methods: {
    handleChange: function (newData, oldData) {
      console.log(newData, oldData)
    },
    hoodPage: function () {

    }
  }
}
</script>

<style lang="less" scoped>
.home-user {
  .user-setting {
    position: relative;
    border: 1px solid #89adc0;
    border-width: 10px 10px 1px 1px;
    border-image: url(../../../../assets/img/leftBox.png) 18 8 2 2;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.12),
      0 0 6px rgba(255, 255, 255, 0.04);
    padding: 0 20px 15px;
    .icon {
      color: #89adc0;
      // font-size: 16px;
    }
    .el-icon-user-solid {
      position: absolute;
      left: 165px;
      top: 9px;
      font-size: 20px;
    }
    .user-setting-title {
      color: #89adc0;
      padding-left: 30px;
      font: normal 700 26px/1.5 "宋体";
      margin-bottom: 12px;
    }
    .el-divider {
      background-color: #89adc0;
      margin-top: 0;
      div {
        background: rgba(255, 255, 255, 0.01);
        div.icon {
          background: #09446c;
          font-size: 18px;
        }
      }
    }
    .user-setting-content {
      list-style: none;
      margin: 0;
      color: #89adc0;
      font: normal 300 18px/40px "宋体";
      padding-top: 20px;
      padding-left: 30px;
      margin: 0 40px;
      position: relative;
      border: 1px solid #89adc0;
      border-width: 2px 2px 10px 10px;
      border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      background-color: rgba(22, 37, 124, 0.2);
      li {
        height: 40px;
        overflow: hidden;
        div.icon,
        div.usermsg {
          float: left;
          .userdata {
            background: rgba(0, 0, 0, 0.3);
          }
        }
        div.icon {
          margin: 10px;
        }
      }
      li.last {
        position: absolute;
        width: 70vw;
        height: 100%;
        right: 2px;
        top: 2px;
        background: url(../../../../assets/img/loginBG.png) no-repeat left
          center;
      }
    }
  }
  .page-setting {
    position: relative;
    border: 1px solid #89adc0;
    border-width: 10px 10px 1px 1px;
    border-image: url(../../../../assets/img/leftBox.png) 18 8 2 2;
    box-shadow: 0 2px 4px rgba(255, 255, 255, 0.12),
      0 0 6px rgba(255, 255, 255, 0.04);
    padding: 0 20px 15px;
    margin-top: 100px;
    .icon {
      color: #89adc0;
      // font-size: 16px;
    }
    .el-icon-document {
      position: absolute;
      left: 165px;
      top: 9px;
      font-size: 20px;
    }
    .page-setting-title {
      color: #89adc0;
      padding-left: 30px;
      font: normal 700 26px/1.5 "宋体";
      margin-bottom: 12px;
    }
    .el-divider {
      background-color: #89adc0;
      margin-top: 0;
      div {
        background: rgba(255, 255, 255, 0.01);
        div.icon {
          background: #09446c;
          font-size: 18px;
        }
      }
    }
    .page-setting-content {
      list-style: none;
      margin: 0;
      color: #89adc0;
      font: normal 300 18px/40px "宋体";
      padding-top: 20px;
      padding-left: 30px;
      margin: 0 40px;
      position: relative;
      border: 1px solid #89adc0;
      border-width: 2px 2px 10px 10px;
      border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      background-color: rgba(22, 37, 124, 0.2);
      .lis {
        height: 40px;
        overflow: hidden;
        margin-bottom: 20px;
        div.icon,
        div.page-lines,
        div.page-pattern {
          float: left;
          .el-input-number {
            width: 150px;
            margin-left: 20px;
          }
          .el-radio {
            margin-left: 10px;
            color: #89adc0;
          }
        }
        div.icon {
          margin: 10px;
        }
        .hood {
          margin-left: 40px;
        }
      }
      div.last {
        position: absolute;
        width: 70vw;
        height: 100%;
        right: 2px;
        top: 2px;
        background: url(../../../../assets/img/loginBG.png) no-repeat left
          center;
        background-size: cover;
      }
    }
  }
}
</style>
