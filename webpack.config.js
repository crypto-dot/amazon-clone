const path = require('path');

module.exports = {
    entry: './src/App.js',
    output: {
        path: __dirname + '/dist', 
        filename: 'main.js'
    },
    module: {
        rules: [
            {
            test: /\.(svg|ttf|eot|woff(2)?)$/i,
            type: 'asset/resource',
            },
            {
            test: /\.(png|svg|jpg|jpeg|gif)/i
            }
        ]
    }
}