<template>
  <el-container id="details-continer">
    <el-aside>
      <el-tree
        :data="treeListData"
        :props="defaultProps"
        @node-click="handleNodeClick"
      ></el-tree>
    </el-aside>
    <el-main>
      <div class="score">
        <router-view></router-view>
      </div>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'home-details',
  data: function () {
    return {
      treeListData: [
        {
          label: '一级 1',
          children: [
            {
              label: '二级 1-1',
              children: [
                {
                  label: '三级 1-1-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 2',
          children: [
            {
              label: '二级 2-1',
              children: [
                {
                  label: '三级 2-1-1'
                }
              ]
            },
            {
              label: '二级 2-2',
              children: [
                {
                  label: '三级 2-2-1'
                }
              ]
            }
          ]
        },
        {
          label: '一级 3',
          children: [
            {
              label: '二级 3-1',
              children: [
                {
                  label: '三级 3-1-1'
                }
              ]
            },
            {
              label: '二级 3-2',
              children: [
                {
                  label: '三级 3-2-1'
                }
              ]
            }
          ]
        }
      ],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    handleNodeClick: function () {}
  }
}
</script>

<style lang="less" scoped>
.el-container#details-continer {
  width: 100%;
  height: 100%;
  // background-color: #fff;
  .el-aside {
    width: 20vw;
    height: 100%;
    padding: 10px 0 50px 10px;
    overflow: hidden;
    margin-right: 10px;
    .el-tree {
      width: 90%;
      height: 100%;
      background-color: rgba(97, 78, 78, 0.1);
      border: 1px solid #89adc0;
      border-width: 2px 2px 10px 10px;
      border-image: url(../../../../assets/img/border.png) 20 15 20 25;
      color: #89adc0;
      padding: 15px 5px 0 5px;
    }
  }
  .el-main {
    height: 90vh !important;
    margin: 10px 0 20px 10px;
    border: 1px solid #89adc0;
    border-width: 2px 2px 10px 10px;
    border-image: url(../../../../assets/img/border.png) 20 15 20 25;
    padding: 30px 0;
    .score {
      width: calc(100% - 60px);
      height: 100%;
      overflow: auto;
    }
    .score::-webkit-scrollbar {
      width: 15px;
    }
    .score::-webkit-scrollbar-track {
      background-color: #89adc0;
      -webkit-border-radius: 18px;
      -moz-border-radius: 18px;
      border-radius: 18px;
    }
    .score::-webkit-scrollbar-thumb {
      background: url(../../../../assets/img/background.png) no-repeat center;
      -webkit-border-radius: 18px;
      -moz-border-radius: 18px;
      border-radius: 18px;
    }
  }
}
</style>
