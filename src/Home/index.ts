import * as React from 'react'

require("./styles.less")

//定义接口

//定义 props 的类型
export interface HomeProps {
  name:string,
  getMyName?: void
}

@connect(
  ({ HomeAction }) => ({
    name: HomeAction.name,
  }),
  (dispatch:Dispatch<{}>) => (
    bindActionCreators<{}>({
      getMyName
    }, dispatch)
  )
)

// <HomeProps,{}>  当前组件 使用 这个接口
export default class Home extends React.PureComponent<HomeProps,{}> {
  state = {}
  static defaultProps = {
    name:"李金珂"
  }
  constructor(props:object){
    super(props as HomeProps)
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
