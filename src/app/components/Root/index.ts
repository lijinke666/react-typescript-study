import * as React from "react"

interface RootProps {
  children?:any
}
export default class Root extends React.PureComponent<RootProps,{}>{
  constructor(props:object) {
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