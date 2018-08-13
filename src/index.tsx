//项目入口文件

import * as React from 'react';
import * as ReactDOM from 'react-dom';
// import { AppContainer as HotLoader } from "react-hot-loader"     //react-hot-loader  热更新可以保存状态
import { Provider } from 'react-redux';
import { StoreState } from './types/home';
import HomeReducer from './Home/reducer';
import { createStore } from 'redux';

import App from './Home/index';
// import store from "../src/shared/store"
import './style.less';

const store = createStore<StoreState>(HomeReducer, {
  name: '李金珂'
});

//HTMLElement 类型断言
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root') as HTMLElement
);
