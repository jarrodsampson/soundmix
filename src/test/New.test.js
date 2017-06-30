import React from 'react';
import ReactDOM from 'react-dom';

import store from '../Store';
import { Provider } from 'react-redux';
import New from '../components/containers/New';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
        <New />
    </Provider>, div);
});
