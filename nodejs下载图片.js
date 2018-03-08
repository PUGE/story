const http = require('http')
const fs = require("fs")
http.get('http://images2015.cnblogs.com/blog/948198/201610/948198-20161002214233650-666441369.png', (res) => {
  const { statusCode } = res;
  const contentType = res.headers['content-type'];
  res.setEncoding("binary"); //一定要设置response的编码为binary否则会下载下来的图片打不开
  let error;
  if (statusCode !== 200) {
    error = new Error('请求失败。\n' +
                      `状态码: ${statusCode}`);
  } else if (!/^image/.test(contentType)) {
    error = new Error('无效的 content-type.\n' +
                      `期望 application/json 但获取的是 ${contentType}`);
  }
  if (error) {
    console.error(error.message);
    // 消耗响应数据以释放内存
    res.resume()
    return;
  }

  let imgData = '';
  res.on('data', (chunk) => { imgData += chunk; });
  res.on('end', () => {
    // 将图片保存到本地
    fs.writeFile("./img.png", imgData, "binary", (err) => {
      if(err) {
        console.log("下载保存图片失败!");
      } else {
        console.log("down success")
      }
    })
  })
}).on('error', (e) => {
  console.error(`错误: ${e.message}`);
})
