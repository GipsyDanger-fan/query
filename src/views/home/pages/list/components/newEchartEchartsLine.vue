<template>
  <div>
    <div
      style="
        width: 100%;
        min-height: 380px;
        height: calc(41.5vh - 10px);
        margin: auto;
        display: flex;
      "
    >
      <div id="main1" style="width: 48%; height: calc(41.5vh - 10px)"></div>
      <div id="main2" style="width: 48%; height: calc(41.5vh - 10px)"></div>
    </div>
    <div
      style="
        width: 100%;
        min-height: 380px;
        height: calc(41.5vh - 10px);
        margin: auto;
        display: flex;
      "
    >
      <div id="main3" style="width: 48%; height: calc(41.5vh - 10px)"></div>
      <div id="main4" style="width: 48%; height: calc(41.5vh - 10px)"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hello",
  props: {
    ids: {
      type: String,
      default: "echartlines",
    },
    // currentDate: {
    //   type: String,
    //   default: "",
    // },
    // title: {
    //   default: "",
    // },
    // subText: {
    //   default: "",
    // },
    currentDate: {
      type: String,
      default: "",
    },
    data2: {
      default: "",
    },
    towerNum: {
      default: "",
    },
    testpalist: {
      default: function () {
        return [];
      },
    },
    spment: {
      default: function () {
        return [];
      },
    },
    spment1: {
      default: function () {
        return [];
      },
    },
    spment2: {
      default: function () {
        return [];
      },
    },
    spment3: {
      default: function () {
        return [];
      },
    },
    czment: {
      default: function () {
        return [];
      },
    },
    czment1: {
      default: function () {
        return [];
      },
    },
    czment2: {
      default: function () {
        return [];
      },
    },
    czment3: {
      default: function () {
        return [];
      },
    },
    wdment: {
      default: function () {
        return [];
      },
    },
    wdment1: {
      default: function () {
        return [];
      },
    },
    wdment2: {
      default: function () {
        return [];
      },
    },
    wdment3: {
      default: function () {
        return [];
      },
    },
    frequencyData: {
      default: function () {
        return [];
      },
    },
    frequencyData1: {
      default: function () {
        return [];
      },
    },
    frequencyData2: {
      default: function () {
        return [];
      },
    },
    frequencyData3: {
      default: function () {
        return [];
      },
    },
    // gantalist: {
    //   default: function () {
    //     return [];
    //   },
    // },
  },
  data() {
    return {
      data3: [],
      titleName: [],
      titleName2: [],
      titleName3: [],
      titleName4: [],
      unitName1: "",
      unitName2: "",
      unitName3: "",
      unitName4: "",
    };
  },
  mounted() {
    // this.drawLine();
    // this.formatter(datasp);  //  折线树形数据
    // this.formatter(data2);  // X轴树形数据
    // this.echartslist();
  },
  methods: {
    // formatter(arr){

    // },
    drawLine() {
      // console.log(
      //   "--------------------------------------------",
      //   this.testpalist
      // );

      this.$nextTick(() => {
        this.echartslist();
        //  myChart1.clear();
      });
    },
    echartslist() {
      console.log("接收参数", this.testpalist);
      let that = this;
      let series = [];
      let series1 = [];
      let series2 = [];
      let series3 = [];

      for (let i in that.testpalist) {
        that.data3 = that.testpalist[i][4].data;
        (that.titleName = that.testpalist[i][5].name[0]), //x轴
          (that.titleName2 = that.testpalist[i][5].name[1]), //x轴
          (that.titleName3 = that.testpalist[i][5].name[2]), //x轴
          (that.titleName4 = that.testpalist[i][5].name[3]), //x轴
          (that.unitName1 = that.testpalist[i][5].type[0]), //x轴
          (that.unitName2 = that.testpalist[i][5].type[1]), //x轴
          (that.unitName3 = that.testpalist[i][5].type[2]), //x轴
          (that.unitName4 = that.testpalist[i][5].type[3]), //x轴
          //水平赋值
          series.push({
            name: that.testpalist[i][5].data,
            type: "line",
            data: that.testpalist[i][2].data, //水平赋值
            data3: that.testpalist[i][4].data, //x轴
            titleName: that.testpalist[i][5].name[0], //x轴

            smooth: true,
            symbol: "none",
            //   itemStyle: {
            //     normal: {
            //       lineStyle: {
            //         width: 8,
            //       },
            //     },
            //   },
          });
        //垂直赋值
        series1.push({
          name: that.testpalist[i][5].data,
          type: "line",
          data: that.testpalist[i][3].data, //垂直赋值
          data3: that.testpalist[i][4].data, //x轴
          titleName2: that.testpalist[i][5].name[1], //x轴
          smooth: true,
          symbol: "none",
          //   itemStyle: {
          //     normal: {
          //       lineStyle: {
          //         width: 8,
          //       },
          //     },
          //   },
        });
        //舞动赋值
        series2.push({
          name: that.testpalist[i][5].data,
          type: "line",
          data: that.testpalist[i][0].data, //舞动赋值
          data3: that.testpalist[i][4].data, //x轴
          titleName3: that.testpalist[i][5].name[2], //x轴
          smooth: true,
          symbol: "none",
          //   itemStyle: {
          //     normal: {
          //       lineStyle: {
          //         width: 8,
          //       },
          //     },
          //   },
        });
        //舞动频率
        series3.push({
          name: that.testpalist[i][5].data,
          type: "line",
          data: that.testpalist[i][1].data, //舞动频率
          data3: that.testpalist[i][4].data, //x轴
          titleName4: that.testpalist[i][5].name[4], //x轴
          smooth: true,
          symbol: "none",
          //   itemStyle: {
          //     normal: {
          //       lineStyle: {
          //         width: 8,
          //       },
          //     },
          //   },
        });
        // console.log("数据33333", that.testpalist[i][0].data);
        // console.log("数据33333", that.testpalist[i][4].data);
      }
      // console.log("数据", series);
      // console.log("数据", that.data3);
      
      // 绘制图表
      var myChart1 = this.$echarts.init(document.getElementById("main1"));
      var myChart2 = this.$echarts.init(document.getElementById("main2"));
      var myChart3 = this.$echarts.init(document.getElementById("main3"));
      var myChart4 = this.$echarts.init(document.getElementById("main4"));
      let tahao = "";
      // if (this.towerNum.length > 4) {
      //   tahao = this.towerNum[0];
      // } else {
      //   tahao = this.towerNum;
      // }
      // console.log(99999999999, this.towerNum);
      // let aaaa = this.towerNum;
      let aaaa = tahao;
      let params = [];
      params.push(aaaa);
      var option1 = {
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 100,
            bottom: 20, //下滑块距离x轴底部的距离
            height: 20, //下滑块手柄的高度调节
          },
          // {
          //   start: 0,
          //   end: 100,
          //   bottom: 20, //下滑块距离x轴底部的距离
          //   height: 20, //下滑块手柄的高度调节
          // },
        ],
        legend: {
          // data:this.towerNum,
          textStyle: {
            fontSize: 16,
            color: "#fff", // 图例文字颜色
          },

          x: "left", //可设定图例在左、右、居中
          // y:'center',     //可设定图例在上、下、居中
          padding: [0, 50, 0, 400], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          show: false,
        },
        title: {
          // text: "水平幅值",
          text: this.titleName,
          subtext: "监测时间：" + this.currentDate,
          x: "center",
          y: "-5px",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 18,
          },
          subtextStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var relVal = "<div>时间：" + params[0].name + "</div>";
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                '<i style="width: 10px;height: 10px;display: inline-block;background: ' +
                params[i].color +
                ';border-radius: 10px;"></i>塔号：' +
                params[i].seriesName +
                " " +
                that.titleName +
                "：" +
                "<i></i>" +
                params[i].value +
                that.unitName1 +
                "<br>";
                
            }
            return relVal;
          },
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },

        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: that.data3,
            // data: [
            //   "00:00:00",
            //   "00:05:00",
            //   "00:10:00",
            //   "00:15:00",
            //   "00:20:00",
            //   "00:25:00",
            //   "00:30:00",
            //   "00:35:00",
            //   "00:40:00",
            //   "00:45:00",
            // ],
            axisLabel: {
              // show:false,
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "PingFang",
              margin: 18,
              // rotate:this.rotate&&this.year.length>5?60:0
              // interval:1
              //   interval: 50,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ffffff80",
              },
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false,
              lineStyle: {
                color: "rgb(71,75,86)",
              },
            },
            avoidLabelOverlap: true,
            axisTick: {
              //坐标轴刻度相关设置。
              show: true,
            },
          },
        ],
        yAxis: {
          // name: "m",
          name: this.unitName1,
          type: "value",
          scale: false,
          nameTextStyle: {
            color: "#fff",
            fontSize: 16,
            align: "right",
            verticalAlign: "bottom",
            lineHeight: 32,
          },
          axisLabel: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "DINOT",
            margin: 24,
            formatter: function (value, index) {
              return value.toFixed(2);
            },
          },
          max: this.max ? this.max : null,
          axisTick: {
            //坐标轴刻度相关设置。
            show: true,
          },

          axisLine: {
            //坐标轴刻度相关设置。
            show: false,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
        },
        visualMap: {
          top: 40,
          right: 60,
          textStyle: {
            color: "#fff",
            fontSize: 24,
          },
          orient: "horizontal",
          itemStyle: {
            lineStyle: {
              width: 38,
            },
          },
          precision: 1, //精确小数
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 20,
          align: "left",

          pieces: [
            {
              // gt: 0.0,
              lte: 0.3,
              color: "rgb(1,235,62)",
            },
            {
              gt: 0.3,
              lte: 0.7,
              color: "rgb(254,233,4)",
            },
            {
              gt: 0.7,
              lte: 1,
              color: "rgb(254,105,5)",
            },
            {
              gt: 1,
              color: "rgb(254,0,0)",
            },
          ],
        },

        //         var aa={
        //             symbol: "circle",
        //             symbolSize: 0,
        //             type: "line",
        //             smooth: true,
        //             itemStyle: {
        //               normal: {
        //                 lineStyle: {
        //                   width: 8,
        //                 },
        //               },
        //             },
        //             areaStyle: {
        //               normal: {
        //                 color: "#ffffff20",
        //               },
        //             },
        //             data:[]
        //           };
        //           var newList=[];
        //           for(let i){
        //   aa.data= this.datasp[i]
        //   newList.push(aa)
        // };

        series: series,
        // series: [
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.spment,
        //     name: this.towerNum[0],
        //     //  textStyle: {
        //     //         color: '#fff'          // 图例文字颜色
        //     //    }
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.spment1,
        //     name: this.towerNum[1],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.spment2,
        //     name: this.towerNum[2],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.spment3,
        //     name: this.towerNum[3],
        //   },
        // ],
      };

      var option2 = {
        // dataZoom: {
        //   show: false,
        // },
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 100,
            bottom: 20, //下滑块距离x轴底部的距离
            height: 20, //下滑块手柄的高度调节
          },
          // {
          //   start: 0,
          //   end: 100,
          //   bottom: 20, //下滑块距离x轴底部的距离
          //   height: 20, //下滑块手柄的高度调节
          // },
        ],
        legend: {
          // data:this.towerNum,
          textStyle: {
            fontSize: 16,
            color: "#fff", // 图例文字颜色
          },

          x: "left", //可设定图例在左、右、居中
          // y:'center',     //可设定图例在上、下、居中
          padding: [0, 50, 0, 400], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          show: false,
        },
        title: {
          // text: "垂直幅值",
          text: this.titleName2,
          subtext: "监测时间：" + this.currentDate,
          x: "center",
          y: "-5px",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 18,
          },
          subtextStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var relVal = "<div>时间：" + params[0].name + "</div>";
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                '<i style="width: 10px;height: 10px;display: inline-block;background: ' +
                params[i].color +
                ';border-radius: 10px;"></i>塔号：' +
                params[i].seriesName +
                " " +
                that.titleName2 +
                "：" +
                "<i></i>" +
                params[i].value +
                that.unitName2 +
                "<br>";
                
            }
            return relVal;
          },
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: that.data3,
            // data: [
            //   "00:00:00",
            //   "00:05:00",
            //   "00:10:00",
            //   "00:15:00",
            //   "00:20:00",
            //   "00:25:00",
            //   "00:30:00",
            //   "00:35:00",
            //   "00:40:00",
            //   "00:45:00",
            // ],
            axisLabel: {
              // show:false,
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "PingFang",
              margin: 18,
              // rotate:this.rotate&&this.year.length>5?60:0
              //   interval: 50,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ffffff80",
              },
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false,
              lineStyle: {
                color: "rgb(71,75,86)",
              },
            },
            avoidLabelOverlap: true,
            axisTick: {
              //坐标轴刻度相关设置。
              show: true,
            },
          },
        ],
        yAxis: {
          // name: "m",
          name: this.unitName2,
          type: "value",
          scale: false,
          nameTextStyle: {
            color: "#fff",
            fontSize: 16,
            align: "right",
            verticalAlign: "bottom",
            lineHeight: 32,
          },
          axisLabel: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "DINOT",
            margin: 24,
            formatter: function (value, index) {
              return value.toFixed(2);
            },
          },
          max: this.max ? this.max : null,
          axisTick: {
            //坐标轴刻度相关设置。
            show: true,
          },

          axisLine: {
            //坐标轴刻度相关设置。
            show: false,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
        },
        visualMap: {
          top: 40,
          right: 60,
          textStyle: {
            color: "#fff",
            fontSize: 24,
          },
          orient: "horizontal",
          itemStyle: {
            lineStyle: {
              width: 38,
            },
          },
          precision: 1, //精确小数
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 20,
          align: "left",

          pieces: [
            {
              // gt: 0.0,
              lte: 0.3,
              color: "rgb(1,235,62)",
            },
            {
              gt: 0.3,
              lte: 0.7,
              color: "rgb(254,233,4)",
            },
            {
              gt: 0.7,
              lte: 1,
              color: "rgb(254,105,5)",
            },
            {
              gt: 1,
              color: "rgb(254,0,0)",
            },
          ],
        },
        series: series1,
        // series: [
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.czment,
        //     // data: [15, 15, 16, 18, 18, 19, 19, 19, 19, 19],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.czment1,
        //     // data: [15, 15, 16, 18, 18, 19, 19, 19, 19, 19],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.czment2,
        //     // data: [15, 15, 16, 18, 18, 19, 19, 19, 19, 19],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.czment3,
        //     // data: [15, 15, 16, 18, 18, 19, 19, 19, 19, 19],
        //   },
        // ],
      };

      var option3 = {
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 100,
            bottom: 20, //下滑块距离x轴底部的距离
            height: 20, //下滑块手柄的高度调节
          },
          // {
          //   start: 0,
          //   end: 100,
          //   bottom: 20, //下滑块距离x轴底部的距离
          //   height: 20, //下滑块手柄的高度调节
          // },
        ],
        legend: {
          // data:this.towerNum,
          textStyle: {
            fontSize: 16,
            color: "#fff", // 图例文字颜色
          },

          x: "left", //可设定图例在左、右、居中
          // y:'center',     //可设定图例在上、下、居中
          padding: [0, 50, 0, 400], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          show: false,
        },
        title: {
          // text: "舞动幅值",
          text: this.titleName3,
          subtext: "监测时间：" + this.currentDate,
          x: "center",
          y: "-5px",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 18,
          },
          subtextStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var relVal = "<div>时间：" + params[0].name + "</div>";
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                '<i style="width: 10px;height: 10px;display: inline-block;background: ' +
                params[i].color +
                ';border-radius: 10px;"></i>塔号：' +
                params[i].seriesName +
                " " +
                that.titleName3 +
                "：" +
                "<i></i>" +
                params[i].value +
                that.unitName3 +
                "<br>";
                
            }
            return relVal;
          },
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: that.data3,
            // data: [
            //   "00:00:00",
            //   "00:05:00",
            //   "00:10:00",
            //   "00:15:00",
            //   "00:20:00",
            //   "00:25:00",
            //   "00:30:00",
            //   "00:35:00",
            //   "00:40:00",
            //   "00:45:00",
            // ],
            axisLabel: {
              // show:false,
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "PingFang",
              margin: 18,
              // rotate:this.rotate&&this.year.length>5?60:0
              //   interval: 50,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ffffff80",
              },
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false,
              lineStyle: {
                color: "rgb(71,75,86)",
              },
            },
            avoidLabelOverlap: true,
            axisTick: {
              //坐标轴刻度相关设置。
              show: true,
            },
          },
        ],
        yAxis: {
          // name: "m",
          name: this.unitName3,
          type: "value",
          scale: false,
          nameTextStyle: {
            color: "#fff",
            fontSize: 16,
            align: "right",
            verticalAlign: "bottom",
            lineHeight: 32,
          },
          axisLabel: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "DINOT",
            margin: 24,
            formatter: function (value, index) {
              return value.toFixed(2);
            },
          },
          max: this.max ? this.max : null,
          // min:-1,max:1,
          axisTick: {
            //坐标轴刻度相关设置。
            show: true,
          },

          axisLine: {
            //坐标轴刻度相关设置。
            show: false,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
        },
        visualMap: {
          top: 40,
          right: 60,
          textStyle: {
            color: "#fff",
            fontSize: 24,
          },
          orient: "horizontal",
          itemStyle: {
            lineStyle: {
              width: 38,
            },
          },
          precision: 1, //精确小数
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 20,
          align: "left",

          pieces: [
            {
              // gt: 0.0,
              lte: 0.3,
              color: "rgb(1,235,62)",
            },
            {
              gt: 0.3,
              lte: 0.7,
              color: "rgb(254,233,4)",
            },
            {
              gt: 0.7,
              lte: 1,
              color: "rgb(254,105,5)",
            },
            {
              gt: 1,
              color: "rgb(254,0,0)",
            },
          ],
        },
        series: series2,
        // series: [
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.wdment,
        //     // data: [20, 25, 30, 35, 38, 44, 46, 48, 53, 56],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.wdment1,
        //     // data: [20, 25, 30, 35, 38, 44, 46, 48, 53, 56],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.wdment2,
        //     // data: [20, 25, 30, 35, 38, 44, 46, 48, 53, 56],
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.wdment3,
        //     // data: [20, 25, 30, 35, 38, 44, 46, 48, 53, 56],
        //   },
        // ],
      };

      var option4 = {
        dataZoom: [
          {
            type: "slider",
            start: 0,
            end: 100,
            bottom: 20, //下滑块距离x轴底部的距离
            height: 20, //下滑块手柄的高度调节
          },
          // {
          //   start: 0,
          //   end: 100,
          //   bottom: 20, //下滑块距离x轴底部的距离
          //   height: 20, //下滑块手柄的高度调节
          // },
        ],
        legend: {
          // data:this.towerNum,
          textStyle: {
            fontSize: 16,
            color: "#fff", // 图例文字颜色
          },

          x: "left", //可设定图例在左、右、居中
          // y:'center',     //可设定图例在上、下、居中
          padding: [0, 50, 0, 400], //可设定图例[距上方距离，距右方距离，距下方距离，距左方距离]
          show: false,
        },
        title: {
          // text: "监测频率",
          text: this.titleName4,
          subtext: "监测时间：" + this.currentDate,
          x: "center",
          y: "-5px",
          textStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 18,
          },
          subtextStyle: {
            color: "#fff",
            fontWeight: "normal",
            fontSize: 16,
          },
        },
        tooltip: {
          trigger: "axis",
          formatter: function (params) {
            var relVal = "<div>时间：" + params[0].name + "</div>";
            for (var i = 0, l = params.length; i < l; i++) {
              relVal +=
                '<i style="width: 10px;height: 10px;display: inline-block;background: ' +
                params[i].color +
                ';border-radius: 10px;"></i>塔号：' +
                params[i].seriesName +
                " " +
                that.titleName4 +
                "：" +
                "<i></i>" +
                params[i].value +
                that.unitName4 +
                "<br>";
                
            }
            return relVal;
          },
        },
        grid: {
          top: "15%",
          left: "5%",
          right: "5%",
          bottom: "5%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            // boundaryGap: false,
            data: that.data3,
            // data: [
            //   "00:00:00",
            //   "00:05:00",
            //   "00:10:00",
            //   "00:15:00",
            //   "00:20:00",
            //   "00:25:00",
            //   "00:30:00",
            //   "00:35:00",
            //   "00:40:00",
            //   "00:45:00",
            // ],
            axisLabel: {
              // show:false,
              color: "#fff",
              fontSize: 13,
              fontWeight: 500,
              fontFamily: "PingFang",
              margin: 18,
              // rotate:this.rotate&&this.year.length>5?60:0
              //   interval: 50,
            },
            axisLine: {
              show: true,
              lineStyle: {
                color: "#ffffff80",
              },
            },
            splitLine: {
              //坐标轴在 grid 区域中的分隔线。
              show: false,
              lineStyle: {
                color: "rgb(71,75,86)",
              },
            },
            avoidLabelOverlap: true,
            axisTick: {
              //坐标轴刻度相关设置。
              show: true,
            },
          },
        ],
        yAxis: {
          // name: "HZ",
          name: this.unitName4,
          type: "value",
          scale: false,
          nameTextStyle: {
            color: "#fff",
            fontSize: 16,
            align: "right",
            verticalAlign: "bottom",
            lineHeight: 32,
          },
          axisLabel: {
            color: "#fff",
            fontSize: 16,
            fontWeight: 400,
            fontFamily: "DINOT",
            margin: 24,
            formatter: function (value, index) {
              return value.toFixed(2);
            },
          },
          max: this.max ? this.max : null,
          axisTick: {
            //坐标轴刻度相关设置。
            show: true,
          },

          axisLine: {
            //坐标轴刻度相关设置。
            show: false,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
          splitLine: {
            //坐标轴在 grid 区域中的分隔线。
            show: true,
            lineStyle: {
              color: "rgba(12,241,255,0.2)",
            },
          },
        },
        visualMap: {
          top: 40,
          right: 60,
          textStyle: {
            color: "#fff",
            fontSize: 24,
          },
          orient: "horizontal",
          itemStyle: {
            lineStyle: {
              width: 38,
            },
          },
          precision: 1, //精确小数
          itemWidth: 15,
          itemHeight: 15,
          itemGap: 20,
          align: "left",

          pieces: [
            {
              // gt: 0.0,
              lte: 0.3,
              color: "rgb(1,235,62)",
            },
            {
              gt: 0.3,
              lte: 0.7,
              color: "rgb(254,233,4)",
            },
            {
              gt: 0.7,
              lte: 1,
              color: "rgb(254,105,5)",
            },
            {
              gt: 1,
              color: "rgb(254,0,0)",
            },
          ],
        },
        series: series3,
        // series: [
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.frequencyData,
        //     // data: [0.35, 0.15, 0.05, 0.07, 15, 15, 15, 15, 15, 15],
        //     // lineStyle: {
        //     //   color: "#333",
        //     // },
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.frequencyData1,
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.frequencyData2,
        //   },
        //   {
        //     symbol: "circle",
        //     symbolSize: 0,
        //     type: "line",
        //     smooth: true,
        //     itemStyle: {
        //       normal: {
        //         lineStyle: {
        //           width: 8,
        //         },
        //       },
        //     },
        //     areaStyle: {
        //       normal: {
        //         color: "#ffffff20",
        //       },
        //     },
        //     data: this.frequencyData3,
        //   },
        // ],
      };
      // 为echarts对象加载数据
      myChart1.setOption(option1, true);
      myChart2.setOption(option2, true);
      myChart3.setOption(option3, true);
      myChart4.setOption(option4, true);
      //联动配置
      //series=[]
      // myChart1.setOption(option1);
      this.$echarts.connect([myChart1, myChart2, myChart3, myChart4]);
      // this.$echarts.clear();
    },
  },
};
</script>
