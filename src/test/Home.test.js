import React from 'react';
import ReactDOM from 'react-dom';

import store from '../Store';
import router from '../router';
import { Provider } from 'react-redux';
import * as $ from 'jquery';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Provider store={store}>
                      {router}
                      </Provider>, div);
});
