<template>
  <div class="table_pg">
    <div class="table_pg-header">
      <div class="user_data-check_page_c" style="width: 270px">
        <span>设**型</span>
        <div id="user_data-input" style="width: 200px">
          <el-select
            v-model="sheiType_name"
            placeholder="请选择"
            @change="sheiTypeChange"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in sheiType"
              :key="item.value"
              :label="item.name | hide"
              :value="item.id"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="user_data-check_page_c">
        <span style="width: 40px">省*</span>
        <div id="user_data-input">
          <el-select
            clearable
            v-model="towerNameListna.province"
            placeholder="请选择"
            @change="LineVoltagena"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in ProvinceListna"
              :key="item.pid"
              :label="item.province"
              :value="item.province"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="user_data-check_page_c">
        <span>电**级</span>
        <div id="user_data-input">
          <el-select
            clearable
            v-model="towerNameListna.voltage"
            placeholder="请选择"
            @change="vopage"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in voltageList.voltageData"
              :key="item.value"
              :label="item | test"
              :value="item"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="user_data-check_page_c">
        <span>线**称</span>
        <div id="user_data-input">
          <el-select
            clearable
            v-model="towerNameListna.lineName"
            placeholder="请选择"
            @change="voltageListVoltage"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in linelist"
              :key="item.value"
              :label="item.lineName | linede"
              :value="item.lineID"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="user_data-check_page_c">
        <span style="width: 40px">塔号</span>
        <div id="user_data-input">
          <el-select
            clearable
            v-model="value2"
            placeholder="请选择"
            @change="tt"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="item in Tower"
              :key="item.value"
              :label="item.towerName"
              :value="item.towerID"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="user_data-check_page_c">
        <span style="width: 40px">网关</span>
        <div id="user_data-input">
          <el-select
            clearable
            v-model="value1"
            placeholder="请选择"
            @change="checkbts"
            :popper-append-to-body="false"
          >
            <el-option
              v-for="(item, index) in gateway"
              :key="index"
              :label="item.cmdId"
              :value="item.cmdId"
            >
            </el-option>
          </el-select>
        </div>
      </div>
      <div class="user_data-check_page_c" style="float: left; width: 342px">
        <span style="width: 29px">日期</span>
        <!-- v-model="selectPtime" -->
        <div id="user_data-input" style="color: #fff; width: 280px">
          <el-date-picker
            :picker-options="pickerOptions"
            v-model="selectPtime"
            type="daterange"
            value-format="yyyy-MM-dd"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="selectionCotentpagesp"
            style="width: 280px !important"
            popper-class="date-style"
          ></el-date-picker>
        </div>
      </div>
      <div
        class="user_data-check_page_c"
        style="width: 40px; margin-left: 10px; margin-top: 10px"
      >
        <el-button
          type="primary"
          @click="submit"
          icon="el-icon-search"
          style="width: 100px; height: 40px; margin-top: 10px; font-size: 20px"
          >查询</el-button
        >
      </div>
    </div>

    <div style="width: 100%; height: 90%" id="table_option">
      <el-col :span="24">
        <div class="tabscon" v-if="isShow">
          <el-tabs
            v-model="activeName"
            @tab-click="handleClickpage"
            style="
              width: 100%;
              height: 50px;
              line-height: 50px;
              position: absolute;
            "
          >
            <el-tab-pane
              v-for="item in checkpoint"
              :key="item.deviceID"
              :label="item.devicename"
            >
            </el-tab-pane>
          </el-tabs>
        </div>
        <div v-if="windShow" style="margin-top: 35px">
          <div class="title_plan">
            <div class="title_plan_center">
              <p>
                风速：<span>{{ meteorolList.averageWindSpeed10Min }}m</span>
              </p>
            </div>
            <div class="title_plan_center">
              <p>
                风向：<span>{{ meteorolList.averageWindDirection10Min }}</span>
              </p>
            </div>
            <div class="title_plan_center">
              <p>
                降雨量：<span>{{ meteorolList.precipitation }}mm</span>
              </p>
            </div>
            <div class="title_plan_center">
              <p>
                雨强：<span>{{ meteorolList.precipitationIntensity }}</span>
              </p>
            </div>
          </div>
        </div>
        <div
          class="tabs pat-titles"
          v-loading="loading"
          element-loading-text="数据加载中"
          element-loading-spinner="el-icon-loading"
          element-loading-background="rgba(0, 0, 0, 0.2)"
          style="font-size: 16px; margin-top: 15px"
          :style="{
            height: windShow ? 'calc(100% - 185px)' : 'calc(100% - 135px)',
          }"
        >
          <div class="score">
            <div
              style="width: 100%; margin-bottom: 20px"
              v-if="showtime"
              :style="{ height: testpalist.length * 45 + '%' }"
              class="data-show"
            >
              <div
                class="device-data"
                v-for="elm in testpalist"
                :key="elm.id || elm.id === 0 ? elm.id : 1"
              >
                <div
                  class="data-deviceId"
                  @click="toDetails(elm.key, elm.towerNum)"
                >
                  设备编号 :
                  {{
                    `${elm.key ? elm.key : ""} - ${
                      elm.towerNum ? elm.towerNum : ""
                    }`
                  }}
                </div>
                <div class="data-details">详细信息 : &nbsp;</div>

                <ve-line
                  :data="elm"
                  :text-style="textStyle"
                  :data-zoom="dataZoom"
                ></ve-line>
              </div>
            </div>
            <div
              style="width: 100%; height: 90%"
              v-if="anytime"
              class="data-show"
            ></div>
          </div>
        </div>
      </el-col>
    </div>
  </div>
</template>

 

<script>
// import newEchartEchartsLine from "./newEchartEchartsLine";
// import dimensional from "./dimensional";
import "./date-style.less";

export default {
  props: {
    defaultData: {
      default: function () {
        return {};
      },
    },
  },

  data() {
    return {
      dataZoom: [
        {
          id: "dataZoomX",
          type: "slider",
          xAxisIndex: [0],
          filterMode: "filter",
        },
      ],
      opp: "18281506670",
      showtime: false,
      anytime: false,
      CurrentDatepage: "",
      CurrentDate: "",
      TDAYDETE: "",
      pickerOptions: {
        //时间选择器组件
        disabledDate(time) {
          //限制时间必须为之前的时间，未来的时间不可选
          return time.getTime() > Date.now();
        },
      },
      activeName: "0",
      loading: false,
      sizeForm: {
        name: "电压等级",
        region: "导线舞动特征量数据",
        date1: "",
        date2: "",
        delivery: "塔号",
        type: [],
        resource: "",
        desc: "路线",
      },
      sbtypelist: [
        {
          value: "选项1",
          label: "黄金糕",
        },
        {
          value: "选项2",
          label: "双皮奶",
        },
        {
          value: "选项3",
          label: "蚵仔煎",
        },
        {
          value: "选项4",
          label: "龙须面",
        },
        {
          value: "选项5",
          label: "北京烤鸭",
        },
      ],
      valuepagetype: "",

      couponSelected: "",
      echartsType: false,

      towerNum: [],

      testpalist: [],
      testpalistqa: [],

      showlayer: false,
      towerName: "",
      // towerNameListna: {
      //   towerName: "",
      //   cmdId: "",
      //   dateTime: "",
      // },
      towerNameListna: [],
      ProvinceListna: [],
      voltageList: [],
      voltageListpage: [],
      provinceName: [],
      combination: [],
      pagezilist: [],
      Tower: [],
      gateway: [],
      maplist: "",
      //----------------------------------------
      linelist: [],
      startTimePage: "",
      endTimePage: "",
      selectPtime: [],
      line_id: [],
      lineiD: "",
      tower_iD: [],
      toweriD: "",

      value1: [],
      value2: "",

      switchList: "", //选项卡切换
      checkpoint: [], //选项卡切换
      inerlist: "",
      gatewayNAME: "", //网关
      sheiType_name: "",
      sheiType: [],
      isShow: true,
      meteorolList: {
        averageWindSpeed10Min: "0",
        averageWindDirection10Min: "0",
        precipitation: "0",
        precipitationIntensity: "0",
      },
      windShow: false,
      msg: "eahgh",
      textStyle: {
        color: "#89adc0",
      },
    };
  },
  filters: {
    hide: function (val) {
      let strval = val.toString();
      return `${strval.substring(0, 5)}******${strval.substring(
        strval.length - 2
      )}`;
    },
    linede: function (val) {
      let strval = val.toString();
      return `${strval.substring(0, 1)}**${strval.substring(
        strval.length - 1
      )}`;
    },
    test: function (val) {
      let strval = val.toString();
      return `${strval.substring(0, 3)}**`;
    },
  },

  mounted() {
    // this.Province();
    this.getCurrentDate();
    // this.getdefaultData();
    // this.couponSelected=this.sizeForm[0].value
    this.getInfo();
    // this.$axios.get('line')
  },
  methods: {
    handleClickpage(tab, event) {
      console.log(tab.label);
      this.switchList = tab.label;
      // this.towerNameListna.cmdId = this.switchList;
      this.checkboxA();
      console.log("选项卡", this.switchList);
    },
    checkbts(val) {
      console.log(val);
      this.towerNameListna.cmdId = val;
      this.gatewayNAME = val;
    },
    tt(val) {
      this.maplist = val;
      let wangguan = val;
      this.inerlist = val;
      console.log(777, wangguan);
      this.towerNameListna.cmdId = ""; //清空网关
      this.gateway = []; //清空网关
      this.checkpoint = []; //清空网关
      this.value1 = "";
      let parms = {
        towerID: wangguan, //塔
      };
      this.$axios.post("device/getDeviceTowerID", parms).then((res) => {
        this.gateway = res.data;
      });

      this.towerNameListna.cmdId = ""; //清空网关
    },
    //选择时间
    selectionCotentpagesp(val) {
      if (val == null) {
        this.startTimePage = this.CurrentDate;
        this.endTimePage = this.CurrentDate;
      }
      console.log(val);
      if (this.selectPtime == null || this.selectPtime.length == 0) {
        this.starttime = "";
        this.endtime = "";
      } else {
        this.starttime = this.selectPtime[0];
        this.endtime = this.selectPtime[1];
      }
      this.startTimePage = this.starttime;
      this.endTimePage = this.endtime;
      //  this.value1 = "";
      // this.withdrawOrderValue();
      console.log("所选择的全部时间", this.selectPtime);
      console.log("开始时间", this.startTimePage);
      console.log("结束时间", this.endTimePage);
    },

    getCurrentDate() {
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth() + 1;
      let day = date.getDate();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      date = year + "-" + month + "-" + day;
      this.CurrentDate = date;
      this.CurrentDatepage = date;
      this.TDAYDETE = date;
      // console.log('*****************',this.CurrentDate)
      // this.startTimePage=date
      // this.endTimePage=date+1
    },
    getdefaultData() {
      //console.log(this.defaultData);
      // 下拉框回显
      this.towerNameListna = JSON.parse(JSON.stringify(this.defaultData));
      // this.towerNameListna = this.defaultData;
      console.log(8888, this.towerNameListna);
      // 请求前参数赋值
      this.provinceName = this.defaultData.province;
      this.$axios
        .post("line/getLineByProvince", {
          // province: this.provinceName,
          province: "冀北",
        })
        .then((res) => {
          this.voltageList = res;
          this.linelist = res.listData;
        });
      // 请求前参数赋值
      this.combination = this.defaultData.lineID;
      this.$axios
        .post("line/getLineByParameter", { lineID: this.combination })
        .then((res) => {
          this.Tower = res;
        });
      // 请求前参数赋值
      this.maplist = this.defaultData.towerID;
      this.$axios
        .post("device/getDeviceTowerID", { towerID: this.maplist })
        .then((res) => {
          this.gateway = res.data;
        });
      // 请求前参数赋值
      this.towerNameListna.cmdId = this.defaultData.devicename;
      // this.morenTabtn();
    },
    handleClick(tab, event) {
      //console.log(tab, event);
    },
    sheiTypeChange(val) {
      console.log("设备类型---", val);
      if (val == 1 || val == 2 || val == 3 || val == 4) {
        this.Province();
        this.towerNameListna.province = "";
        this.towerNameListna.voltage = ""; //清空默认电压等级
        this.towerNameListna.lineName = ""; //清空默认线路名称
        this.towerNameListna.towerName = ""; //清空默认塔号
        this.towerNameListna.towerID = ""; //清空默认塔号
        this.towerNameListna.cmdId = ""; //清空网关
        this.selectPtime = [];
        this.startTimePage = "";
        this.endTimePage = "";
        this.Tower = [];
        this.value2 = "";
        this.value1 = "";
        this.gateway = [];
        this.checkpoint = [];
        this.linelist = [];
        this.voltageList.voltageData = [];
        this.windShow = false;
      } else {
        this.ProvinceListna = [];
      }
    },
    //下拉查询
    Province() {
      let parms = {
        name: 1,
      };
      this.$axios.post("line/getProvince", parms).then((res) => {
        //console.log("省份查询", res);
        this.ProvinceListna = res;
      });
    },
    //选择省份触发事件（下拉电压等级）
    LineVoltagena(val) {
      this.towerNameListna.voltage = ""; //清空默认电压等级
      this.towerNameListna.lineName = ""; //清空默认线路名称
      this.towerNameListna.towerName = ""; //清空默认塔号
      this.towerNameListna.towerID = ""; //清空默认塔号
      this.towerNameListna.cmdId = ""; //清空网关
      this.selectPtime = [];
      this.startTimePage = "";
      this.endTimePage = "";
      this.Tower = [];
      this.value2 = "";
      this.value1 = "";
      this.gateway = [];
      this.checkpoint = [];
      this.provinceName = val;
      // //console.log(val);
      let parms = {
        province: this.provinceName,
      };
      this.$axios.post("line/getLineByProvince", parms).then((res) => {
        //console.log("-------", parms);
        this.voltageList = res;
        // this.voltageListpage=res;
        this.linelist = res.listData;
        //console.log(this.linelist.length);
      });
    },
    //电压触发事件
    vopage(val) {
      this.towerNameListna.lineName = ""; //清空默认线路名称   //选择一个他就清空初始化数据
      this.towerNameListna.towerName = ""; //清空默认塔号
      this.towerNameListna.towerID = ""; //清空默认塔号
      this.towerNameListna.cmdId = ""; //清空网关
      this.pagezilist = val;
      this.value2 = "";
      this.value1 = "";
      let parms = {
        province: this.provinceName,
      };
      this.$axios.post("line/getLineByProvince", parms).then((res) => {
        //console.log("-------", res);
        // this.linelist=res.listData;
        var linelist1 = [];
        var linedata = res.listData;
        for (let k = 0; k < linedata.length; k++) {
          if (linedata[k].voltage == val) {
            linelist1.push(linedata[k]);
          }
          this.linelist = linelist1;
        }
      });

      // //console.log(this.pagezilist);
    },
    //线路触发事件
    voltageListVoltage(val) {
      //console.log(val);

      this.towerNameListna.towerName = ""; //清空默认塔号
      this.towerNameListna.towerID = ""; //清空默认塔号
      this.maplist = "";
      this.gateway = [];
      this.towerNameListna.cmdId = ""; //清空网关
      this.combination = val; //线路
      this.value2 = "";
      this.value1 = "";
      this.Tower = [];
      // if (this.provinceName != "" || this.pagezilist != "") {
      let parms = {
        // province: this.provinceName, //省
        lineID: this.combination, //线路
        // lineID: 26, //线路
        // lineID: this.towerNameListna.lineID
        // provCompanyCodeID: this.towerNameListna.pId,
        // voltage: this.pagezilist, //电压
      };
      //console.log("6666666666666666", parms);
      this.$axios.post("line/getLineByParameter", parms).then((res) => {
        //console.log("塔号", res);
        this.Tower = res;
      });
      // } else {
      //   alert("不为空");
      // }
      this.line_id = this.linelist.find((item) => {
        //这里的userList就是上面遍历的数据源
        return item.lineID === val; //筛选出匹配数据
      });
      // this.tunnel_line_Name = this.line_id.lineName;
      this.lineiD = this.line_id.lineID;
      // console.log(this.lineiD);
    },
    tabpagebtn() {
      let parms = {
        towerID: this.inerlist, //塔
        cmdId: this.towerNameListna.cmdId,
      };
      this.$axios.post("device/getDeviceTowerID", parms).then((res) => {
        this.checkpoint = res.data;
        console.log(this.checkpoint);
      });
    },
    //选项卡操作
    checkboxA() {
      this.loading = true;
      //判断网关----------------------------------------
      if (this.startTimePage != "") {
        this.CurrentDatepage =
          this.startTimePage + "~" + this.endTimePage || this.CurrentDate;
      } else {
        this.CurrentDatepage = this.CurrentDate;
      }
      let parms = {
        cmdId: this.switchList, //网关
        towerID: 222, //塔号
        towerID1: this.maplist, //塔号1
        codename: this.towerNameListna.province, //省
        voltage: this.towerNameListna.voltage, //电压等级
        startTime: this.startTimePage, //开始时间
        endTime: this.endTimePage, //结束时间
        lineId: this.lineiD, //线路id
      };
      this.$axios.post("dance/getDanceOnDay", parms).then((res) => {
        if (res.data != []) {
          console.log(res.data);
          let arr = [];
          let obj = {},
            id = 0;
          for (let i in res.data) {
            if (!res.data[i]) {
              this.testpalist = res.data;
              this.loading = false;
              return;
            }

            obj = {
              columns: [
                "date",
                "ugallopAmplitude",
                "ugallopFrequency",
                "uhorizontalAmplitude",
                "uverticalAmplitude",
                "x",
              ],
              rows: [],
              key: i,
              towerNum: res.data[i].towerNum,
              id: id,
            };
            id++;
            res.data[i].date.forEach((item, index) => {
              obj.rows.push({
                date: item,
                ugallopAmplitude: res.data[i].ugallopAmplitude[index],
                ugallopFrequency: res.data[i].ugallopFrequency[index],
                uhorizontalAmplitude: res.data[i].uhorizontalAmplitude[index],
                uverticalAmplitude: res.data[i].uverticalAmplitude[index],
                X: res.data[i].X[index],
              });
            });
            arr.push(obj);
            obj = {};
            console.log(arr);
          }
          this.testpalist = arr;

          this.loading = false;
        }
      });
    },
    //查询接口
    submit() {
      console.log(2222);
      if (this.sheiType_name) {
        if (this.sheiType_name == 1) {
          this.checkbox();
        } else if (this.sheiType_name == 2) {
          this.subpass();
        } else if (this.sheiType_name == 3) {
          this.Trajectory();
        } else if (this.sheiType_name == 4) {
          this.Meteorological();
        }
      } else {
        this.$message.error("请选择设备类型");
      }
    },
    subpass() {
      // let parms = {
      //   // timeStamp: "2021-2-23",
      //   startTime: "2021-2-21", //开始时间
      //   endTime: "2021-2-23", //结束时间
      // };
      if (this.value2) {
        this.showtime = true;
        this.anytime = false;
        this.loading = true;
        this.activeName = "0";
        this.isShow = false;
        this.checkpoint = [];
        //判断网关----------------------------------------
        let wgname = "";
        if (this.gatewayNAME) {
          if (this.towerNameListna.cmdId) {
            wgname = this.towerNameListna.cmdId;
          } else {
            wgname = this.gateway[0].cmdId;
          }
        } else {
          wgname = this.gateway[0].cmdId;
        }
        if (this.startTimePage != "") {
          this.CurrentDatepage =
            this.startTimePage + "~" + this.endTimePage || this.CurrentDate;
        } else {
          this.CurrentDatepage = this.CurrentDate;
        }
        let parms = {
          cmdId: wgname, //网关
          towerID: 222, //塔号
          towerID1: this.maplist, //塔号1
          codename: this.towerNameListna.province, //省
          voltage: this.towerNameListna.voltage, //电压等级
          startTime: this.startTimePage, //开始时间
          endTime: this.endTimePage, //结束时间
          lineId: this.lineiD, //线路id
        };
        this.$axios.post("towerTilt/getData", parms).then((res) => {
          let arr = [];
          let obj = {},
            id = 0;
          for (let i in res.data) {
            if (!res.data[i]) {
              this.testpalist = res.data;
              this.loading = false;
              return;
            }
            obj = {
              columns: [
                "date",
                "angleX",
                "angleY",
                "inclination",
                "inclinationY",
              ],
              rows: [],
              key: i,
              towerNum: res.data[i].towerNum,
              id: id,
            };
            id++;
            res.data[i].date.forEach((item, index) => {
              obj.rows.push({
                date: item,
                angleX: res.data[i].angleX[index],
                angleY: res.data[i].angleY[index],
                inclination: res.data[i].inclination[index],
                inclinationY: res.data[i].inclinationY[index],
              });
            });
            arr.push(obj);
            obj = {};
            console.log(arr);
          }
          this.testpalist = arr;
          this.loading = false;
        });
      } else {
        this.$message.error("请选择塔号");
      }
    },
    checkbox() {
      if (this.value2) {
        this.anytime = false;
        this.loading = true;
        this.activeName = "0";
        this.tabpagebtn();
        this.isShow = true;
        this.windShow = false;
        //判断网关----------------------------------------
        let wgname = "";
        if (this.gatewayNAME) {
          if (this.towerNameListna.cmdId) {
            wgname = this.towerNameListna.cmdId;
          } else {
            wgname = this.gateway[0].cmdId;
          }
        } else {
          wgname = this.gateway[0].cmdId;
        }
        if (this.startTimePage != "") {
          this.CurrentDatepage =
            this.startTimePage + "~" + this.endTimePage || this.CurrentDate;
        } else {
          this.CurrentDatepage = this.CurrentDate;
        }
        let parms = {
          cmdId: wgname, //网关
          towerID: 222, //塔号
          towerID1: this.maplist, //塔号1
          codename: this.towerNameListna.province, //省
          voltage: this.towerNameListna.voltage, //电压等级
          startTime: this.startTimePage, //开始时间
          endTime: this.endTimePage, //结束时间
          lineId: this.lineiD, //线路id
        };
        this.$axios.post("dance/getDanceOnDay", parms).then((res) => {
          if (res.data != []) {
            console.log(res.data);
            let arr = [];
            let obj = {},
              id = 0;

            for (let i in res.data) {
              if (!res.data[i]) {
                this.testpalist = res.data;
                this.showtime = true;
                this.loading = false;
                return;
              }
              obj = {
                columns: [
                  "date",
                  "ugallopAmplitude",
                  "ugallopFrequency",
                  "uhorizontalAmplitude",
                  "uverticalAmplitude",
                ],
                rows: [],
                key: i,
                towerNum: res.data[i].towerNum,
                id: id,
              };
              id++;
              res.data[i].date.forEach((item, index) => {
                obj.rows.push({
                  date: item,
                  ugallopAmplitude: res.data[i].ugallopAmplitude[index],
                  ugallopFrequency: res.data[i].ugallopFrequency[index],
                  uhorizontalAmplitude: res.data[i].uhorizontalAmplitude[index],
                  uverticalAmplitude: res.data[i].uverticalAmplitude[index],
                });
              });
              arr.push(obj);
              obj = {};
              console.log(arr);
            }
            this.testpalist = arr;
            this.showtime = true;
            this.loading = false;
          }
        });
      } else {
        this.$message.error("请选择塔号");
      }
    },
    //---------------------------导线舞动轨迹
    Trajectory() {
      if (this.value2) {
        this.anytime = true;
        this.showtime = false;
        this.loading = true;
        this.activeName = "0";
        this.isShow = false;
        this.windShow = false;
        //判断网关----------------------------------------
        let wgname = "";
        if (this.gatewayNAME) {
          if (this.towerNameListna.cmdId) {
            wgname = this.towerNameListna.cmdId;
          } else {
            wgname = this.gateway[0].cmdId;
          }
        } else {
          wgname = this.gateway[0].cmdId;
        }
        if (this.startTimePage != "") {
          this.CurrentDatepage =
            this.startTimePage + "~" + this.endTimePage || this.CurrentDate;
        } else {
          this.CurrentDatepage = this.CurrentDate;
        }
        let parms = {
          cmdId: wgname, //网关
          towerID: 222, //塔号
          towerID1: this.maplist, //塔号1
          codename: this.towerNameListna.province, //省
          voltage: this.towerNameListna.voltage, //电压等级
          startTime: this.startTimePage, //开始时间
          endTime: this.endTimePage, //结束时间
          lineId: this.lineiD, //线路id
        };
        // this.$axios.post("dance/getDanceOnDay", parms).then((res) => {
        this.$axios.post("danceTrajectory/getData", parms).then((res) => {
          if (res.data != []) {
            console.log(res.data);
            let arr = [];
            let obj = {},
              id = 0;
            for (let i in res.data) {
              if (!res.data[i]) {
                this.testpalist = res.data;
                this.testpalistqa = res.data;
                this.loading = false;
                return;
              }
              obj = {
                columns: ["date", "x", "y", "z", "z"],
                rows: [],
                key: i,
                towerNum: res.data[i].towerNum,
                id: id,
              };
              id++;
              res.data[i].date.forEach((item, index) => {
                obj.rows.push({
                  date: item,
                  x: res.data[i].x[index],
                  y: res.data[i].y[index],
                  z: res.data[i].z[index],
                  z: res.data[i].z[index],
                });
              });
              arr.push(obj);
              obj = {};
              console.log(arr);
            }
            this.testpalist = arr;
            this.testpalistqa = res.data;
            this.loading = false;
          }
        });
      } else {
        this.$message.error("请选择塔号");
      }
    },
    //---------------------------气象监测数据
    Meteorological() {
      // let parms = {
      //   // timeStamp: "2021-2-23",
      //   startTime: "2021-2-21", //开始时间
      //   endTime: "2021-2-23", //结束时间
      // };
      if (this.value2) {
        this.showtime = true;
        this.anytime = false;
        this.loading = true;
        this.activeName = "0";
        this.isShow = false;
        this.checkpoint = [];
        //判断网关----------------------------------------
        let wgname = "";
        if (this.gatewayNAME) {
          if (this.towerNameListna.cmdId) {
            wgname = this.towerNameListna.cmdId;
          } else {
            wgname = this.gateway[0].cmdId;
          }
        } else {
          wgname = this.gateway[0].cmdId;
        }
        if (this.startTimePage != "") {
          this.CurrentDatepage =
            this.startTimePage + "~" + this.endTimePage || this.CurrentDate;
        } else {
          this.CurrentDatepage = this.CurrentDate;
        }
        let parms = {
          cmdId: wgname, //网关
          towerID: 222, //塔号
          towerID1: this.maplist, //塔号1
          codename: this.towerNameListna.province, //省
          voltage: this.towerNameListna.voltage, //电压等级
          startTime: this.startTimePage, //开始时间
          endTime: this.endTimePage, //结束时间
          lineId: this.lineiD, //线路id
        };
        this.$axios
          .post("meteorological/getMeteorologicalData", parms)
          .then((res) => {
            let arr = [];
            let obj = {},
              id = 0;
            for (let i in res.data) {
              if (!res.data[i]) {
                this.testpalist = res.data;
                this.loading = false;
                return;
              }
              obj = {
                columns: [
                  "date",
                  "airPressure",
                  "humidity",
                  "airTemperature",
                  "radiantionIntensity",
                  "towerNum",
                ],
                rows: [],
                key: i,
                towerNum: res.data[i].towerNum,
                id: id,
              };
              id++;
              res.data[i].date.forEach((item, index) => {
                obj.rows.push({
                  date: item,
                  airPressure: res.data[i].airPressure[index],
                  humidity: res.data[i].humidity[index],
                  airTemperature: res.data[i].airTemperature[index],
                  radiantionIntensity: res.data[i].radiantionIntensity[index],
                });
              });
              arr.push(obj);
              obj = {};
              console.log(arr);
            }
            this.testpalist = arr;
            this.loading = false;
          });
        this.$axios.post("meteorological/getLatestData", parms).then((res) => {
          this.windShow = true;
          if (res.code == 200) {
            this.meteorolList = res.data;
          }
        });
      } else {
        this.$message.error("请选择塔号");
      }
    },

    getInfo() {
      this.$axios.post("dance/getInfo").then((res) => {
        console.log(res.data);
        this.sheiType = res.data;
      });
    },
    toDetails(deviceId, towerNum) {
      console.log(towerNum, deviceId);
      this.$axios
        .post("towerTilt/getData", {
          cmdId: deviceId, //网关
          towerID: 222, //塔号
          towerID1: towerNum,
        })
        .then((res) => {
          console.log(res);
        });
    },
  },
};
</script>

<style  lang="less" scoped>
// @import "./special.css"; //引入固定的样式
.el-loading-spinner {
  font-size: 120px !important;
}
.el-loading-text {
  font-size: 60px !important;
}
.el-popper[x-placement^="bottom"] {
  min-width: 900px !important;
}
#echartszx {
  width: 100%;
  height: 800px;
}
.barHeight {
  width: 100%;
  position: relative;
  /* background-image: url("../../../assets/img/image/网格.png"); */
}
.full {
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 9;
}
.full-bg {
  position: absolute;
  z-index: 0;
  top: 0;
  width: 100%;
  height: 100%;
  left: 0;
}
.table_pg {
  width: 100%;
  float: left;
  height: 100%;
  .table_pg-header {
    z-index: 9999;
    margin-top: 10px;
    width: 100%;
    height: 90px;
    float: left;
    .user_data-check_page_c {
      width: 220px;
      height: 80px;
      float: left;
      display: flex;
      margin-left: 5px;
      color: #000;
      span {
        width: 60px;
        line-height: 80px;
        float: left;
        font-size: 14px;
        color: #68d8fe;
      }
      #user_data-input {
        margin-left: 20px;
        // margin-right: 10px;
        line-height: 80px;
        margin-top: -17px;
        float: right;
        // width: 260px;
        width: 146px;
        .el-select {
          background-color: transparent;
          /deep/ .el-input {
            background-color: transparent;
            input {
              background-color: transparent;
              border-color: #68d8fe;
              color: #68d8fe;
            }
            span {
              span {
                .el-input__icon {
                  color: #68d8fe;
                }
              }
            }
          }
          /deep/ .el-select-dropdown {
            background: transparent;
            border-color: #409eff;
            .el-select-dropdown__item {
              color: #409eff;
              border-bottom: 1px solid #409eff;
            }
            .el-select-dropdown__item.hover {
              background: #409eff40;
            }
          }
        }
        /deep/.el-date-editor.el-range-editor.el-input__inner.el-date-editor--daterange {
          background: transparent;
          border-color: #68d8fe;
          i,
          span,
          input {
            background: transparent;
            color: #68d8fe;
          }
        }
      }
    }
  }
  .selectGood-bottom {
    width: 100%;
    height: 160px;
    float: left;
    .el-pagination {
      float: right;
      margin-top: 80px;
    }
  }
  .table_pg-center {
    width: 100%;
    overflow: hidden;
    float: left;
    margin-bottom: 20px;
  }
  #table_option {
    height: calc(100% - 100px);
    margin-top: 100px;
    .el-col {
      background: transparent;
      height: 100%;
      div.tabscon {
        height: 50px;
        position: relative;
        .el-tabs {
          height: 50px;
          top: -35px;
        }
      }
      div.tabs.pat-titles {
        margin: 0;
        padding: 20px 60px;
        width: calc(100% - 120px);
        height: calc(100% - 40px);
        .score {
          width: calc(100% - 20px);
          height: 100%;
          padding: 2px 20px 0 0;
          overflow: auto;
          overflow: auto;
          .data-show {
            border: 1px solid #409eff;
            border-width: 4px 4px 10px 10px;
            border-image: url(../../../../assets/img/border.png) 20 15 20 25;
            .device-data {
              height: calc(50vh - 20px);
              float: left;
              padding: 10px;
              width: calc(50% - 60px);
              margin: 10px 10px 10px 0;
              border: 1px solid #409eff;
              border-width: 4px 4px 10px 10px;
              color: #409eff;
              border-image: url(../../../../assets/img/border.png) 20 15 20 25;
              .data-deviceId,
              .data-details {
                font-size: 22px;
                line-height: 1.5;
              }
              .data-deviceId:hover {
                cursor: pointer;
              }
              .data-deviceId {
                margin-bottom: 20px;
              }
            }
            .device-data:nth-child(2n + 1) {
              margin-right: 30px;
              margin-left: 10px;
            }
          }
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
          background: url(../../../../assets/img/background.png) no-repeat
            center;
          -webkit-border-radius: 18px;
          -moz-border-radius: 18px;
          border-radius: 18px;
        }
      }
    }
  }
}
.pat-titles {
  width: 100%;
  margin-left: 16px;
  margin-top: 10px;
  span {
    padding-left: 36px;
    padding-right: 70px;
    height: 50px;
    display: inline-block;
  }
  .my-icon-blue {
    cursor: pointer;
    text-align: center;
    width: 97%;
    display: inline-block;
    font-size: 42px;
    font-family: PingFang;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.5);
    line-height: 65px;
    // background: url("../assets/img/libg.png") no-repeat;
    background-size: 100% 50%;
  }
  .my-icon-blue.active {
    text-align: center;
    font-size: 42px;
    font-family: PingFang;
    font-weight: 500;
    color: #ffffff;
    line-height: 65px;
    display: inline-block;
    // background: url("../assets/img/libg.png") bottom no-repeat;
    background-size: 100%;
    position: relative;
  }
  .my-icon-blue.active::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    left: 30px;
    bottom: -15px;
    // background: url("../../assets/img/libg.png") bottom no-repeat;
  }
}
.el-date-picker .el-picker-panel__footer > .el-button--text {
  display: none; // 新建请求单的date-picker下“此刻”按钮
}
.el-tabs__active-bar {
  padding: 0px !important;
  left: 0px !important;
}
.el-date-editor
  el-range-editor
  el-input__inner
  el-date-editor--daterange
  is-active {
  width: 296px !important;
}
.title_plan {
  width: 100%;
  height: 50px;
  line-height: 50px;
  position: absolute;
  top: 82px;
  // border: 1px solid yellow;
  display: flex;
  .title_plan_center {
    width: 10%;
    height: 40px;
    border: 1px solid #409eff;

    margin: 0px 82px;
    p {
      font-size: 20px;
      color: #fff;
      line-height: 1px;
      // text-align: center;
      margin-left: 20px;
    }
  }
}

.el-picker-panel.el-date-range-picker.el-popper.date-style {
  border-color: #409eff;
  background: transparent;
  color: #409eff;
}
</style>
