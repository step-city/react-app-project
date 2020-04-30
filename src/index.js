import React from 'react';
import ReactDOM from 'react-dom';
import './index.less';
//导入路由Js
import RouterJs from './router/index';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <RouterJs />, document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//用于在生产环境中为用户在本地创建一个service worker 来缓存资源到本地,
//用来处理离线缓存、消息推送、后台自动更新等任务,提升应用的访问速度
serviceWorker.unregister();
