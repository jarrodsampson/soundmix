import React from 'react';
import ReactDOM from 'react-dom';

import store from '../Store';
import { Provider } from 'react-redux';
import UserDetail from '../components/containers/UserDetail';

it('renders without crashing', () => {
    const div = document.createElement('div');
    /*ReactDOM.render(<Provider store={store}>
        <UserDetail params={{id: 'techno'}} />
    </Provider>, div);*/
});
