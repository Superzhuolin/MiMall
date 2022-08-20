//webpack的配置表  会传送给node.js服务器从而实现服务的设置
const { defineConfig } = require('@vue/cli-service')
// 导入模块
module.exports = defineConfig({
  // transpileDependencies: true,
  devServer: {
    host: "localhost",
    port: 8080,
    proxy: { //代理
      '/activity': {
        target: 'https://www.imooc.com',
        // ws: true,
        changeOrigin: false,  //是否将主机头源点改为目标url地址
         pathRewrite: {
           '^/activity': '/activity'
         }
      }
    }
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