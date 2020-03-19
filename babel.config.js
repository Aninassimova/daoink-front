module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  // 插件会自动将代码转化为按需引入形式
  // 接着可以在代码中直接引入 Vant 组件
  plugins: [
    ['import', {
      libraryName: 'vant',
      libraryDirectory: 'es',
      style: true
    }, 'vant'],
    // muse-ui
    ["import", {
      "libraryName": "muse-ui",
      "libraryDirectory": "lib",
      "camel2DashComponentName": false
    }],
    // mint
    ["component", {
      libraryName: "mint-ui",
      style: true
    }
    ]
  ]
}
