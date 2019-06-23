import React from "react"
import {withRouter} from "react-router-dom"
import {Input} from "semantic-ui-react"
class Login extends  React.Component{
    constructor(props){
        super(props);
        this.refuserAccount = React.createRef();
        this.refpassWord = React.createRef();
    }
    handle=()=>{
        let {history} = this.props;
        let userAccount = this.refuserAccount.current.value;
        let passWord = this.refpassWord.current.value;
        fetch(`http://localhost:3000/login?userName=${userAccount}&passWord=${passWord}`).then((data)=>{
            return data.json();
        }).then((ret)=>{
            if(ret.flag===1){
                history.push('/Home')
            }
            else{
                alert('输入错误');
            }
        })
    }
    render(){
        return(
            <div className='login-contain'>
                <div className='login-title'>登录</div>
                {/* <label htmlFor="userAccount">账号:</label> */}
                <Input icon='users' iconPosition='left' placeholder='登录账号' ref={this.refuserAccount}/>
                {/* <input name='userAccount' type="text" ref={this.refuserAccount}/> */}
                <label htmlFor="passWord">密码:</label><input name='passWord' type="text" ref={this.refpassWord}/>
                <button onClick={this.handle}>登录</button>
            </div>
        )
    }
}

export default withRouter(Login)