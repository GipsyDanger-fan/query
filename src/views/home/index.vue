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
        <div id="user"></div>
      </el-menu>
    </el-header>
    <el-main>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'app-home',
  data: function () {
    return {
      activeIndex: '/'
    }
  },
  methods: {
    handleSelect: function (str1, str2) {
      console.log(str1, str2)
    }
  }
}
</script>

<style lang="less">
#app-home {
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
      background-color: #fff;
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
