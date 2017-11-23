//项目入口文件

import * as React from "react"
import * as ReactDOM from "react-dom"
// import { AppContainer as HotLoader } from "react-hot-loader"     //react-hot-loader  热更新可以保存状态  
import { Provider } from "react-redux"

import registerServiceWorker from './registerServiceWoeker'

import App from "./app"
import store from "../src/shared/store"
import "./style.less"


const render = (Component: any) => {
    ReactDOM.render(
        <Provider store={ store } >
            <Component/>
        </Provider>,
        document.getElementById('root') as HTMLElement
    )
}
render(App)

registerServiceWorker()