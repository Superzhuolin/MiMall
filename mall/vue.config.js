//webpack的配置表  会传送给node.js服务器从而实现服务的设置
/* 项目是通过vue Cli脚手架打包构建的  所有关于项目的配置都在vue.config,js中设置的 */
const { defineConfig } = require('@vue/cli-service')
// 导入模块
module.exports = defineConfig({
  transpileDependencies: true,// 是否将所有文件都编译一遍（通过 babel 编译文件：ES6 + → ES5）
  lintOnSave: false,
  devServer: {//devServer是本地开发服务器的配置信息.
    host: "localhost", //指定本地访问主机
    port: 8080,  //端口
    proxy: { //代理
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        // ws: true,
        changeOrigin: true,  //是否将主机头源点改为目标url地址
        pathRewrite: {
          '/api': ''
        }
      }
    }
  },
  // publicPath:'/app',  //设置前缀
  // outputDir:'dist',  //改变压缩包的文件名
  // indexPath:'index2.html',  //改变index.html的文件名
  productionSourceMap: false,//生产环境的source map  设置true后网页不可查看源代码
  chainWebpack: (config) => {
    config.plugins.delete('prefetch');
  }
})

/* 
const path = require('path')
module.exports = defineConfig({
  lintOnSave: false,
  devServer: {
    proxy: { //代理
      '/api': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true,  //是否将主机头源点改为目标url地址
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    }
  }
})

 */