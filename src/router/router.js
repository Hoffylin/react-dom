import React from "react"
import {BrowserRouter as Router, Route,Link,Switch,} from "react-router-dom"
import Login from "../component/login";
const Router1 = ()=>{
    return(
        <div>
            <Login/>
        </div>
    )
}
const MyRouters = ({label,to})=>{
    return(
        <Route path={to} children={(props)=>{
            return(
                <div className={props.match?'active':''}>
                    {props.match?'>':''}
                    <Link to={to}>{label}</Link>
                </div>
            )
        }}></Route>
    )
}


// const Inner = ({match})=>{
//     return(
//         <div>
//             {match.params.topicId}
//         </div>
//     )
// }
const NoMatch = ({match})=>{
    return(
        <div>
            404
        </div>
    )
}
const Router2 = ({match})=>{
    return(
        <div>
            Router2
        </div>
    )
}
const Home = ({match})=>{
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
                <ul>
                    <li>
                        {/* <Link to='/'>Home</Link> */}
                    </li>
                    <li>
                        <Link to='Router1'>Router1</Link>
                    </li>
                    <li>
                        {/* <Link to='Router2'>Router2</Link> */}
                    </li>
                </ul>
                <br/>
                {/* <Switch> */}
                <Route path='/Router1' component={Router1}></Route>
                {/* <Route component={NoMatch}></Route> */}


                <MyRouters label='HOME' to='/HOME' />
                <MyRouters label='myRouters' to='/Router2'/>

                <Route path='/Router2' exact component={Router2}></Route>
                <Route exact path='/HOME' exact  component={Home}/>

                {/* </Switch> */}
            </Router>
        )
    }
}

export default RootRouter;