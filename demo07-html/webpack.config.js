const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: {
    app: "./src/app.js",
    app2: "./src/app2.js"
  },
  output: {
    publicPath: __dirname + "/dist/", // 打包后资源文件的引用会基于此路径
    path: path.resolve(__dirname, "dist"), // 打包后的输出目录
    filename: "[name].bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        // css处理为style标签
        use: [
          "style-loader",
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '设置html的title',// 当设置了template选项后，title选项将失效
      filename: "index.html",
      template: "./index.html",
      chunks: ["app"], // entry中的app入口才会被打包
      // chunks: ["app2"], // entry中的app2入口才会被打包
      minify: {
        // 压缩选项
        collapseWhitespace: true
      }
    }),
  ]
};
