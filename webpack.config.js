var webpack = require('webpack');

module.exports = {
  entry: __dirname+"/src/app.js",
  output:{
    filename:"build.js",
    path:__dirname+"/public/js"
  },

  watch:true,
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude:/node_modules/,
        loader: "babel-loader",
        query:{
          presets:["react", "es2015","stage-1"]
        }
      }
    ]
  }
}
