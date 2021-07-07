<template>
  <div id="login">
    <div id="systematicName">
      <!-- <p class="gy1">地震响应在线监测与震损快速评估系统</p>
      <p class="gy2">抗震能力预览、模拟地震事件</p>
      <p class="gy2">地震信息速报、快速震损评估</p> -->
    </div>
    <div id="systematicLogin">
      <div id="systematic">
        <p id="loginName">实时****系统</p>
        <div id="login-box">
          <el-form ref="form"
           :model="loginForm"
            :rules="loginRules">
            <el-form-item prop="account">
              <el-input
                id="name"
                v-model="loginForm.account"
                placeholder="请输入用户名"
              >
                <template slot="prepend">用户</template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input
                id="password"
                v-model="loginForm.password"
                type="password"
                placeholder="请输入密码"
                @keyup.enter.native="check"
              >
                <template slot="prepend">密码</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                @click="check"
                style="width: 100%; margin-top: 20px"
                >登录</el-button
              >
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
    <!-- 粒子特效 -->
    <vue-particles
      color="#dedede"
      :particleOpacity="0.7"
      :particlesNumber="60"
      shapeType="circle"
      :particleSize="4"
      linesColor="#dedede"
      :linesWidth="1"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :moveSpeed="4"
      :hoverEffect="true"
      hoverMode="grab"
      :clickEffect="true"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  data () {
    return {
      name: '',
      password: '',
      loginForm: {
        account: '',
        password: ''
      },
      loginRules: {
        account: [
          {
            required: true,
            message: '请输入账号',
            trigger: ['blur', 'change']
          },
          {
            min: 3,
            max: 16,
            message: '用户名长度在3~16位之间',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change']
          },
          {
            min: 6,
            max: 20,
            message: '密码长度在6~20位之间',
            trigger: ['blur', 'change']
          }
        ]
      }
    }
  },
  mounted () {
    // 防止手动跳转登录页，强制清除token，面包屑导航
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('breadcrumb')
  },
  methods: {
    check () {
      this.$refs.form.validate((valid) => {
        if (valid) {
          const RASpassword = this.$jsEncrypt(this.loginForm.password)
          const parms = {
            name: this.loginForm.account,
            password: RASpassword
          }
          this.$axios.post('/login', parms).then((res) => {
            if (res.code === 200) {
              sessionStorage.setItem('token', res.data.token)
              sessionStorage.setItem('roleName', res.data.token)
              this.$router.push('/screen')
              this.$message.success('操作成功')
            } else {
              this.$message.error('用户名或密码错误')
            }
          })
        }
      })
    }
  },
  watch: {}
}
</script>
<style lang="less">
#login {
  width: 100%;
  height: 100%;
  background: url("../../assets/img/loginBG.png") no-repeat;
  #systematicName {
    width: 100%;
    height: 237px;
    color: #fff;
    background: rgba(14, 79, 155, 0.8);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    .gy1 {
      width: 60%;
      text-align: center;
      font-size: 46px;
      margin-bottom: 10px;
    }
    .gy2 {
      width: 60%;
      text-align: center;
      font-size: 24px;
      margin: 10px 0;
    }
  }
  #systematicLogin {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    width: 60%;
    height: 360px;
    #systematic {
      position: absolute;
      left: 0;
      right: 0;
      margin: auto;
      width: 280px;
      height: 100%;
      border-radius: 5px;
      padding: 0 50px;
      background: rgb(4, 61, 121);
      #loginName {
        color: rgb(8, 243, 248);
        font-size: 20px;
        text-align: center;
        margin: 0;
        height: 120px;
        line-height: 120px;
      }
    }
  }

  #login-box {
    .el-input-group {
      margin-top: 10px;
    }
    .el-input-group__prepend {
      color: #fff;
      border-color: #049aff;
      background: linear-gradient(to bottom, #03c0f3, #049aff);
    }
  }
}
</style>
