import React from "react"

interface RootProps {

}
export default class Root extends React.PureComponent<RootProps,{}>{
  constructor(props) {
    super(props)
  }
  public render():JSX.Element {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
  componentDidMount() {
    console.log('这个是母版,不会被刷新')
  }
}