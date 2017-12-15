import * as React from 'react'
import {connect} from "react-redux"
// import * as actions from "./action"
// import * as reducers from "./reducer"

// require("./styles.less")

//定义接口

//定义 props 的类型  相当于 PropsTypes
export interface HomeProps {
  name:string,
  age?:number
}

//定义 state 的类型
export interface HomeState {

}

// @connect(
//   ({ HomeAction }: reducers.StoreType) => ({
//     name: HomeAction.name,
//   }),
//   (dispatch:Dispatch<actions.HomeAction>) => (
//     bindActionCreators<{}>({
//       getMyName:actions.getName
//     }, dispatch)
//   )
// )

// <HomeProps,{}>  当前组件 使用 这个接口
export default class Home extends React.Component<HomeProps,any> {
  public state : HomeState
  constructor(props:HomeProps){
    super(props)
  }
  render() : JSX.Element {
    return (
      <div className="test">哈哈</div>
    )
  }
  public componentDidMount(){
    console.log('typescript 学习!')
  }
}

