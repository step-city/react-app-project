import React, { Component } from 'react'
import logo from '../../assets/img/logo.svg';

export default class TopInfo extends Component {
    render() {
        return (
            <div className="topInfo-header">
                <h3>React组件Demo:小商城</h3>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        )
    }
}