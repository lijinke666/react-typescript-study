//项目入口文件

import * as React from "react"
import * as ReactDOM from "react-dom"
import { AppContainer as HotLoader } from "react-hot-loader"     //react-hot-loader  热更新可以保存状态  
import { Provider } from "react-redux"

import App from "app"
import store from "store"
import "./style.less"


const render = ( Component ) => {
    ReactDOM.render(
        <HotLoader>
            <Provider store={store}>
                <Component/>
            </Provider>
        </HotLoader>,
        document.getElementById('root') as HTMLElement
    )
}
render(App)

//webpack内置对象
if (module.hot) {
    module.hot.accept("app", () => {
        render(App)
    });
}
