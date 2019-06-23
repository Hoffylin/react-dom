import React from "react"
import {BrowserRouter as Router, Route,Switch,} from "react-router-dom"
import Login from "../component/login";
const NoMatch = ({match})=>{
    return(
        <div>
            404
        </div>
    )
}
const HOME = ({match})=>{
    return(
        <div>
            Home
        </div>
    )
}
class  RootRouter extends React.Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path='/' component={Login}></Route>
                    <Route path='/HOME' component={HOME} />
                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        )
    }
}

export default RootRouter;