import * as React from 'react';
import * as actions from '../Home/action';
import { StoreState } from '../types/home';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';

// require("./styles.less")

//定义接口

//定义 props 的类型  相当于 PropsTypes
export interface HomeProps {
  name?: string;
  getName?: () => void;
}

//暂时没搞懂 用装饰器 怎么写这个类型
// @connect(
//   ({ HomeAction }: StoreState) => ({
//     name: HomeAction.name,
//   }),
//   (dispatch:Dispatch<actions.HomeAction>) => (
//     bindActionCreators<{}>({
//       getMyName:
//     }, dispatch)
//   )
// )

const mapStateToProps = ({ name }: StoreState) => {
  return {
    name
  };
};
const mapDispatchToProps = (dispatch: Dispatch<actions.HomeAction>) => {
  return {
    getName: () => dispatch(actions.getName())
  };
};

// <HomeProps,{}>  当前组件 使用 这个接口
class Home extends React.Component<HomeProps, {}> {
  constructor(props: HomeProps) {
    super(props);
  }
  render(): JSX.Element {
    const {name} = this.props
    console.log(name);
    return (
    <div className="test">{name}</div>
  )
  }
  public componentDidMount() {
    this.props.getName();
    console.log('typescript 学习!');
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
