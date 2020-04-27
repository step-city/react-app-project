import { React, Component } from 'react'

const LoginLayou = () => {
    return (
        <div className="loginContent">
            <header className="title">
                <h3 className="loginTitle">博客园登陆</h3>
                <i className="loginIcon"></i>
            </header>
            <main className="loginForm">
                
            </main>
        </div>
    )
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLogin:false
        }
    }

    render(){
        const isLogin = this.state.isLogin;
        let layout;
        if (isLogin) {
            layout = ''
        }
        return (
            <div className="layoutContainer">

            </div>
        )
    }
}

export default LoginControl;