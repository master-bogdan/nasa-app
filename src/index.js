import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store'; 

import GlobalStyle from './globalStyles';
import Main from './pages/Main';

ReactDOM.render(
    <Provider store={store}>
        <GlobalStyle />
        <Main />
    </Provider>,
  document.getElementById('root')
);

