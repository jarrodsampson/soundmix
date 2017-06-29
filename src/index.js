import React from 'react';
import ReactDOM from 'react-dom';
import router from './router';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux';
import store from './Store';

ReactDOM.render(<Provider store={store}>
    {router}
    </Provider>
    , document.getElementById('soundMixApp'));
registerServiceWorker();
