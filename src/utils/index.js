// 拼接 str
export function strSplicling (data) {
  let _str = '?'
  for (const k in data) {
    if (data[k]) {
      _str += k + '=' + data[k] + '&'
    }
  }
  _str = _str.substring(0, _str.length - 1)
  return _str
}
