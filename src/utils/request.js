import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'
import { getItem } from '@/utils/auth'

const baseURL = 'http://47.114.190.125:8888/'
// 创建axios实例
const service = axios.create({
  //   baseURL: 'http://172.18.0.26:8888/', // api的base_url
  //   baseURL: 'http://117.175.169.58:18888/', // api的base_url
  baseURL, // api的base_url
  timeout: 500000 // 请求超时时间
})
// request拦截器

service.interceptors.request.use(config => {
  if (getItem('token')) {
    config.headers = {
      token: getItem('token'),
      'content-security-policy': 'default-src',
      'x-Content-Type-Options': 'nosniff',
      'x-xSS-Protection': '1'
    }
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {
  const res = response.data
  if (response.status !== 200) {
    Message({
      message: res.message || res.errorMessage,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.error('error')
  } else {
    return res
  }
},
err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        err.message = '请求错误'
        break
      case 401:
        err.message = '未授权，请登录'
        // 退出登录操作
        // store.dispatch('LogOut').then(() => {
        // })
        location.reload()
        router.push('/login')
        break
      case 403:
        err.message = '拒绝访问'
        break

      case 404:
        err.message = `请求地址出错: ${err.response.config.url}`
        router.push('/404')
        break

      case 408:
        err.message = '请求超时'
        break

      case 500:
        err.message = '服务器内部错误'
        break

      case 501:
        err.message = '服务未实现'
        break

      case 502:
        err.message = '网关错误'
        break

      case 503:
        err.message = '服务不可用'
        break

      case 504:
        err.message = '网关超时'
        break

      case 505:
        err.message = 'HTTP版本不受支持'
        break

      default:
    }
    Message.error(err.message)
  }
  return Promise.reject(err)
}
)

export default service

// service.interceptors.response.use(
//   response => {
//     const res = response.data
//     console.log('response', res)
//     if (response.request.responseType) {
//       return response
//     } else {
//       if (res.code == '0') {
//         // res.code 表示返回状态码
//         return res
//       } else if (res.code == 4010) {
//         // 退出登录操作
//         store.dispatch('LogOut').then(() => {
//           location.reload()
//           router.push('/login')
//         })

//         Message.error(res.msg || 'token已过期')
//       } else {
//         Message.error(res.msg || 'Error！')
//         return false
//       }
//     }
//   },
//   err => {
//     if (err && err.response) {
//       switch (err.response.status) {
//         case 400:
//           err.message = '请求错误'
//           break
//         case 401:
//           err.message = '未授权，请登录'
//           // 退出登录操作
//           store.dispatch('LogOut').then(() => {
//             location.reload()
//             router.push('/login')
//           })
//           break
//         case 403:
//           err.message = '拒绝访问'
//           break

//         case 404:
//           err.message = `请求地址出错: ${err.response.config.url}`
//           router.push('/404')
//           break

//         case 408:
//           err.message = '请求超时'
//           break

//         case 500:
//           err.message = '服务器内部错误'
//           break

//         case 501:
//           err.message = '服务未实现'
//           break

//         case 502:
//           err.message = '网关错误'
//           break

//         case 503:
//           err.message = '服务不可用'
//           break

//         case 504:
//           err.message = '网关超时'
//           break

//         case 505:
//           err.message = 'HTTP版本不受支持'
//           break

//         default:
//       }
//       Message.error(err.message)
//     }
//     return Promise.reject(err)
//   }
// )
