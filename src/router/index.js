import React from 'react';
//需要补充BrowserRouter,否则报错无法识别浏览器路径
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import { HashRouter as Router, Route, Redirect } from 'react-router-dom'; 

import TopInfo from '../pages/common/topInfo';
import Navigator from '../pages/common/leftNavigator';

import AllProducts from '../pages/modules/allProducts/index'
import MyProducts from '../pages/modules/myProducts/index'
//引用redux存储
import { Provider } from 'react-redux'
import store from '../store'

class RouterJs extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="componentWrapper">
                        <div className="topInfo">
                            <TopInfo />
                        </div>
                        <div className="mainContent">
                            <div className="mainRow">
                                <div className="left_nav">
                                    <Navigator />
                                </div>
                                <div className="right_cont">
                                    <div className="showComp">
                                        {/* <Route path="/">
                                            <Redirect to="/home" />
                                        </Route> */}
                                        <Switch>
                                            <Route exact path="/" component={AllProducts} />
                                            <Route path="/myProducts" component={MyProducts} />
                                        </Switch>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Router>
            </Provider>
        )
    }
}

export default RouterJs;