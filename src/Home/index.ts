import React from 'react'
import "./styles.less"

//定义接口
export interface HomeProps {
  name:string
}

// <HomeProps,{}>  当前组件 使用 这个接口
export default class Home extends React.PureComponent<HomeProps,{}> {
  static defaultProps = {
    name:"李金珂"
  }
  public render():JSX.Element {
    const {name} = this.props              
    return (
      <div key="home" className="home">
        <h2>你好! 我是:<strong className="name">{name}</strong></h2>
      </div>
    )
  }
  componentDidMount(){
    console.log('typescript 学习!')
  }
}
