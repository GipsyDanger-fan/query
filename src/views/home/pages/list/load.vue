<template>
  <div
    style="font-size: 60px; width: 100%; height: calc(95.5vh - 1px)"
    v-loading="loading"
    element-loading-text="数据加载中"
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(7,52,86, 0.8)"
  >
    <!-- <index v-if="pageshow" :defaultData="towerNameList"></index> -->
    <index ></index>
  </div>
</template>
<script>
import index from "./index";

export default {
  data() {
    return {
      towerNameList: [],
      pageshow: false,
      loading: false,
    };
  },
  components: {
    index,
  },
  mounted() {
    this.Provincege();
  },
  methods: {
    Provincege() {
      let parms = {
        name: 1,
      };
      this.$axios
        .post("device/getDeviceByParameter_default", parms)
        .then((res) => {
          this.$nextTick(() => {
            this.towerNameList = res[0]; //塔号
            this.pageshow = true;
            this.loading = false;
          });
        });
    },
  },
};
</script>
<style lang="less" scoped>
.el-loading-spinner {
  font-size: 120px !important;
}
.el-loading-text {
  font-size: 60px !important;
}
</style>