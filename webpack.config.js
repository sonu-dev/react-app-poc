const path = require('path');  
const HtmlWebpackPlugin = require('html-webpack-plugin');  

module.exports = {  
    entry: './src/main.js',  
    output: {  
       path: path.join(__dirname, '/dist'),  
       filename: 'index_bundle.js'  
    },  
    devServer: {  
       inline: true,  
       port: 8080  
    },  
    module: {  
       rules: [  
          {  
             test: /\.jsx?$/,  
             exclude: /node_modules/,  
         use: {  
               loader: "babel-loader",  
             }  
          }  
       ]  
    },  
    plugins:[  
       new HtmlWebpackPlugin({  
          template: './public/index.html'  
       })  
    ]  
}