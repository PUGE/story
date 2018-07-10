function timeAgo (nS) {
  let result = 0
  if (!isNaN) {
    console.error('timeAgo方法传入的参数不是一个数字!')
    return
  }
  const diffValue =  new Date().getTime() - nS
  if (diffValue < 0) return
  const monthC = diffValue / 2592000000
  const weekC = diffValue / (7 * 86400000)
  const dayC = diffValue / 86400000
  const hourC =diffValue / 3600000
  const minC = diffValue / 60000
  if (monthC >= 1) {
    result = "" + parseInt(monthC) + "月前"
  } else if (weekC >= 1) { 
    result = "" + parseInt(weekC) + "周前"
  } else if (dayC >= 1) {
    result = "" + parseInt(dayC) +"天前"
  } else if (hourC >= 1) {
    result = "" + parseInt(hourC) +"小时前"
  } else if (minC>=1) {
    result = ""+ parseInt(minC) +"分钟前"
  } else {
    result = "刚刚"
  }
  return result;
}
