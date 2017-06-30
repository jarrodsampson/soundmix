import React from 'react';
import ReactDOM from 'react-dom';

import store from '../Store';
import { Provider } from 'react-redux';
import Discover from '../components/containers/Discover';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Provider store={store}>
        <Discover />
    </Provider>, div);
});
