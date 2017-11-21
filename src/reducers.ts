//这里引入你所有的 reducer 进行合并

import HomeAction from "Home/reducer"

import { combineReducers } from "redux"     //reducer的合并
import { routerReducer } from "react-router-redux"

const chatReducer = combineReducers({
  HomeAction,
  routing:routerReducer
})

export default chatReducer
