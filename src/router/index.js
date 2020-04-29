import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom'
import TopInfo  from '../pages/common/topInfo';
import Navigator  from '../pages/common/leftNavigator';

import AllProducts from '../pages/modules/allProducts/index'
import MyProducts from '../pages/modules/myProducts/index'

class RouterJs extends React.Component {
    render(){
        return (
            <Router>
                <div className="componentWrapper">
                    <div className="topInfo">
                        <TopInfo/>
                    </div>
                    <div className="mainContent">
                        <div className="mainRow">
                            <div className="left_nav">
                                <Navigator/>
                            </div>
                            <div className="right_cont">
                                <div className="showComp">
                                    <Switch>
                                        <Route exact path="/" component={AllProducts}/>
                                        <Route path="/myProducts" component={MyProducts}/>
                                    </Switch>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}

export default RouterJs;