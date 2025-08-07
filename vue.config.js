const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  
  // 開発サーバーの設定
  devServer: {
    port: 8080,
    open: true
  },
  
  // ビルド設定
  configureWebpack: {
    resolve: {
      alias: {
        '@': require('path').resolve(__dirname, 'src')
      }
    }
  },
  
  // 出力設定
  outputDir: 'dist',
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  
  // CSS設定
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/styles/variables.scss";`
      }
    }
  }
}) 