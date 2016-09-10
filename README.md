## react native+mobx学习

### react-native环境安装


 + http://reactnative.cn/docs/0.31/getting-started.html



### android studio模拟重启服务
 + adb kill-server
 + adb start-server

### mobx安装
 + npm install mobx 
 + npm install mobx-react 
 + npm install babel-plugins-transform-decorators-legacy (装饰器依赖的插件)
 
#### 配置.babelrc文件
     {
        "presets": [
            "react",
            "react-native"
        ],
        "plugins": [
            "transform-decorators-legacy"
        ]
     }

### mobx常用接口
 + observable
 + @observer
 + @action

### react-native常用组件
 + View
 + ScrollView
 + ListView
 + Image
 + Text






