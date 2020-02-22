const path = require('path')

const isProd = () => {
  return process.env.NODE_ENV === 'production';
}

// 将相对路径转化为绝对路径
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const APP_BASE_URL = 'http://www.xxx.com/'

module.exports = {
  // publicPath: isProd ? APP_BASE_URL : './',
  publicPath: './'
}