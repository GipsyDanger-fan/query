<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="less">
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
  font-size: 16px;
  font-family: "微软雅黑";
  background: url(./assets/img/background.png);
}
</style>
