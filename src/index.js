import './assets/base.less';
import React from 'react';
import ReactDOM from 'react-dom';

import { AppContainer } from 'react-hot-loader';
// MainPageContainer 是一个 HMR 必须的包裹(wrapper)组件

import MainPage from './pages/MainPage';

const render = (Component) => {
    console.log(Component);
    console.log(AppContainer);
    ReactDOM.render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
};

render(MainPage);

// 模块热替换的 API
if (module.hot) {
    module.hot.accept('./pages/MainPage', () => {
        render(MainPage)
    });
}