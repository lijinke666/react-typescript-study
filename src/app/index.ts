import * as React from 'react'
import { Router, browserHistory } from "react-router"
import routes from "shared/libs/routes"

export interface AppProps {
    browserHistory?:any,
    routes?:any
}

export default class App extends React.Component<AppProps,{}>  {
    public render():JSX.Element {
        return (
            <Router history={browserHistory} routes={routes}></Router>
        )
    }
}
