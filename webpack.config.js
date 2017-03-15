const webpack = require("webpack")
const path = require("path")
const jsx = path.resolve(__dirname, "dev");
const www = path.resolve(__dirname, "www", "public")
module.exports = {
    entry: {
        index:jsx+"/index.jsx",
        login:jsx+"/login.jsx",
        t_content:jsx+"/t_content.jsx",
        q_two:jsx+"/q_two.jsx",
        q_two4:jsx+"/q_two4.jsx",
        q_two2:jsx+"/q_two2.jsx",
        q_two3:jsx+"/q_two3.jsx",
        class1:jsx+"/admin"+"/class1.jsx",
        y_foot:jsx+"/y_foot.jsx",
        school:jsx+"/admin"+"/school.jsx",
        about1:jsx+"/admin"+"/about1.jsx",
        admin:jsx+"/admin"+"/admin.jsx",
        mess:jsx+"/admin"+"/mess.jsx",
        apply:jsx+"/admin"+"/apply.jsx",
        t_two:jsx+"/t_two.jsx",
        M_two:jsx+"/M_two.jsx",
        M_two2:jsx+"/M_two2.jsx",
        M_two3:jsx+"/M_two3.jsx",
        M_two4:jsx+"/M_two4.jsx",
        M_three:jsx+"/M_three.jsx",
        M_three2:jsx+"/M_three2.jsx",
        M_three3:jsx+"/M_three3.jsx",
        M_three4:jsx+"/M_three4.jsx",
        L_two1:jsx+"/L_two1.jsx",
        L_two2:jsx+"/L_two2.jsx",
        L_three1:jsx+"/L_three1.jsx",
        L_three2:jsx+"/L_three2.jsx",
        wangEditor:jsx+"/admin"+"/wangEditor.jsx"

    },
    output: {
        path: www + "/js/",
        filename: "[name].js"
    },
    module: {
        loaders: [{
            test: /\.js[x]?$/,
            exclude: /node_modules/,
            loader: 'babel-loader?presets[]=es2015&presets[]=react'
        }]
    },
    plugins: [
         new webpack.DefinePlugin({
           'process.env': {
             'NODE_ENV': JSON.stringify('production')
           }
         }),
         new webpack.optimize.UglifyJsPlugin({
           compress: {
             warnings: false
           }
         })

    ]
}