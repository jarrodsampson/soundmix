import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';

import {Navbar, NavItem, Button, Modal} from 'react-materialize';

export default function(props) {
    return (
        <div className="App">
            <main>

                <Headroom>
                    <Navbar brand='SoundMix' right className="deep-purple darken-1" options={{ closeOnClick: true }}>
                        <li><NavLink to="/new" activeClassName="activeV">New</NavLink></li>
                        <li><NavLink to="/popular" activeClassName="activeV">Popular</NavLink></li>
                        <li><NavLink to="/hot" activeClassName="activeV">Hot</NavLink></li>
                        <li><NavLink to="/discover" activeClassName="activeV">Discover</NavLink></li>
                        <li><NavLink to="#aboutModal">About</NavLink></li>
                        <NavItem href="//www.mixcloud.com/developers/" target="_blank" rel="noopener noreferrer">API</NavItem>
                    </Navbar>
                </Headroom>

                <div className="appRoot2">
                    {props.children}
                </div>

                <Back2Top>
                    <div className="scrollTop">
                        <Button floating large className='black' waves='light' icon='navigation' />
                    </div>
                </Back2Top>

                <Modal
                    header='SoundMix'
                    id='aboutModal'>
                    <div>
                        <p>
                            Find awesome cloudcasts roaming the world. Right now.
                        </p>
                        <p>
                            Build with React, Redux, and MaterializeCSS.
                        </p>
                        <p>
                            Version 1.2.3, Created By Jarrod Sampson
                        </p>
                    </div>
                </Modal>

            </main>
            <footer className="page-footer grey darken-4">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">SoundMix</h5>
                            <p className="grey-text text-lighten-4">Find awesome cloudcasts roaming the world. Right now.</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">About The Developer</h5>
                            <ul className="col l6 m6 s6">
                                <li><a className="grey-text text-lighten-3" href="//github.com/planlodge" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                                <li><a className="grey-text text-lighten-3" href="//www.linkedin.com/in/jarrodsampson/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                            </ul>
                            <ul className="col l6 m6 s6">
                                <li><a className="grey-text text-lighten-3" href="//Ko-fi.com/jarrodsampson" target="_blank" rel="noopener noreferrer">Donate</a></li>
                                <li><a className="grey-text text-lighten-3" href="//www.npmjs.com/~planlodge" target="_blank" rel="noopener noreferrer">NPMJS</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-copyright deep-purple darken-1">
                    <div className="container">
                        © 2017 Planlodge
                        <a className="grey-text text-lighten-4 right" href="//planlodge.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    </div>
                </div>

            </footer>

        </div>

    );
}