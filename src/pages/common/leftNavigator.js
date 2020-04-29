import React from 'react';
import { Link, withRouter } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <ul className="navContent">
                <li className="navItem">
                    <Link className="itemBtn" to="/">所有产品</Link>
                </li>
                <li className="navItem">
                    <Link className="itemBtn" to="/myProducts">我的产品</Link>
                </li>
            </ul>
        )
    }
}

//通过withRouter给Nav组件注入路由信息
Nav = withRouter(Nav);

export default Nav;
