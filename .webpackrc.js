const path = require('path');

export default {
    "entry": "./src/index.js",
    "disableCSSModules": false,
    "hash": false,
    "proxy": {
        "/api": {
            "target": "https://www.sojson.com/",
            "port": 8888,
            "changeOrigin": true
        }
    },
    "env": {
        "development": {
            "extraBabelPlugins": [
                "dva-hmr",
                ["import", { "libraryName": "antd", "style": "css" }],
            ]
        },
        "production": {
            "publicPath": "./",
            "extraBabelPlugins": [
                ["import", { "libraryName": "antd", "style": "css" }],
            ]
        }
    }
}
