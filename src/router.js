import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Switch
} from 'react-router-dom';

import Navigation from './components/layouts/Navigation';
import ScrollToTop from './components/helpers/ScrollToTop';

import Home from './components/containers/Home';
import Hot from './components/containers/Hot';
import Popular from './components/containers/Popular';
import New from './components/containers/New';
import Discover from './components/containers/Discover';
import Search from './components/containers/Search';

export default (
            <Router>
                <ScrollToTop>
                    <Navigation>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route exact path="/hot" component={Hot}/>
                            <Route exact path="/popular" component={Popular}/>
                            <Route exact path="/new" component={New}/>
                            <Route exact path="/discover" component={Discover}/>
                            <Route exact path="/search" component={Search}/>
                            <Redirect from="*" to="/" />
                        </Switch>
                    </Navigation>
                </ScrollToTop>
            </Router>
);