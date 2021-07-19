<template>
  <el-container id="app-home">
    <el-header>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#09446c"
        text-color="#89adc0"
        active-text-color="#ffd04b"
      >
        <div id="logo-box">
          <a href="" onclick="return false; $router.push('/')" id="logo"> </a>
        </div>
        <el-menu-item index="/">总体展示</el-menu-item>
        <el-menu-item index="/list">设备查询</el-menu-item>
        <el-submenu index="/details">
          <template slot="title">设备详情</template>
          <el-menu-item index="/details/state">设备状态</el-menu-item>
          <el-menu-item index="/details/detailed">设备详情</el-menu-item>
          <el-menu-item index="/details/operate">设备操作</el-menu-item>
          <el-submenu index="/details/history">
            <template slot="title">设备数据历史记录</template>
            <el-menu-item index="/details/history/sensor-data"
              >传感器数据</el-menu-item
            >
            <el-menu-item index="/details/history/sensor-state"
              >传感器状态</el-menu-item
            >
            <el-menu-item index="/details/history/battery-state"
              >电池状态</el-menu-item
            >
            <el-menu-item index="/details/history/host-state"
              >主机状态</el-menu-item
            >
          </el-submenu>
        </el-submenu>
        <el-menu-item index="/user">用户设置</el-menu-item>
        <div id="user">
          <div class="icon el-icon-s-custom"></div>
          <div class="username">电科院网关</div>
        </div>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { setItem, getItem } from "../../utils/auth";
export default {
  name: "app-home",
  data: function () {
    return {
      activeIndex: "/",
    };
  },
  methods: {
    handleSelect: function (activeIndex) {
      this.activeIndex = activeIndex;
      this.$router.push(activeIndex);
    },
  },
  mounted: function () {
    // this.activeIndex = this.$route.fullPath
    this.activeIndex = getItem("path");
  },
  watch: {
    $route: function (newdata) {
      this.activeIndex = newdata.path;
      setItem("path", newdata.path);
    },
  },
};
</script>


<style lang="less">
#app-home {
  width: 100%;
  height: 100%;
  .el-main {
    width: 100%;
    height: calc(100vh - 65px);
    overflow: hidden;
  }
  .el-header,
  .el-main {
    padding: 0;
    #logo-box {
      float: left;
      width: 150px;
      height: 60px;
      margin-left: 10vw;
      #logo {
        display: block;
        height: 100%;
        background: url(../../assets/img/logo.png) no-repeat 8px;
      }
    }
    #user {
      float: right;
      width: 150px;
      height: 60px;
      margin-right: 10vw;
      background-color: #09446c;
      .icon {
        float: left;
        width: 30px;
        height: 30px;
        line-height: 28px;
        text-align: center;
        font-size: 20px;
        margin-top: 15px;
        border-radius: 50%;
        color: #89adc0;
        border: 1px solid #89adc0;
      }
      .username {
        float: left;
        margin-left: 15px;
        color: #89adc0;
        line-height: 60px;
        font-size: 16px;
      }
    }
    .el-breadcrumb {
      height: 20px;
      line-height: 20px;
      font-size: 16px;
      color: #fff;
      padding-left: 10vw;
      .el-breadcrumb__item {
        .el-breadcrumb__inner {
          color: #89adc0;
        }
      }
    }
  }
}
</style>
