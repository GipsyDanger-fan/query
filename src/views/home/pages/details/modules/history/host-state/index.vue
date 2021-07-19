<template>
  <div class="history-host-state">
    <ul class="table-header">
      history-host-state
    </ul>
    <div class="table-body">
      <div class="score">
        <table></table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'history-host-state',
  data: function () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.history-host-state {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .table-header {
    height: 40px;
    border: 2px solid #68d8fe;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .table-body {
    height: calc(100% - 56px);
    border: 2px solid #68d8fe;
    border-top: 0 none;
    padding: 5px 5px 5px 0;
    .score {
      overflow: auto;
      // height: calc(100% - 53px);
      height: 100%;
      padding-right: 10px;
      table {
        width: calc(100% - 10px);
        height: 200%;
      }
    }
    .score::-webkit-scrollbar {
      width: 10px;
    }
    .score::-webkit-scrollbar-track {
      background-color: #89adc0;
      -webkit-border-radius: 18px;
      -moz-border-radius: 18px;
      border-radius: 18px;
    }
    .score::-webkit-scrollbar-thumb {
      background: url(../../../../../../../assets/img/background.png) no-repeat
        center;
      -webkit-border-radius: 18px;
      -moz-border-radius: 18px;
      border-radius: 18px;
    }
  }
}
</style>
