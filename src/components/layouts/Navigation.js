import React from 'react';
import {
    NavLink
} from 'react-router-dom'
import Headroom from 'react-headroom';
import Back2Top from 'react-back2top';

import {Navbar, NavItem, Button, Modal, Icon} from 'react-materialize';

export default function(props) {
    return (
        <div className="App">
            <main>

                <Headroom>
                    <Navbar brand='SoundMix' right className="red" options={{ closeOnClick: true }}>
                        <li><NavLink to="/new" activeClassName="activeV">New</NavLink></li>
                        <li><NavLink to="/popular" activeClassName="activeV">Popular</NavLink></li>
                        <li><NavLink to="/hot" activeClassName="activeV">Hot</NavLink></li>
                        <li><NavLink to="#aboutModal">About</NavLink></li>
                        <NavItem href="https://punkapi.com/documentation/v2" target="_blank" rel="noopener noreferrer">API</NavItem>
                        <li><NavLink to="/search" activeClassName="activeV"><Icon>search</Icon></NavLink></li>
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
                    header='Berr.IO'
                    id='aboutModal'>
                    <div>
                        <p>
                            A search application through Brewdog's expansive back catalogue of beer.
                        </p>
                        <p>
                            Version 1.3.1, Created By Jarrod Sampson
                        </p>
                    </div>
                </Modal>

            </main>
            <footer className="page-footer black">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <h5 className="white-text">Berr.IO</h5>
                            <p className="grey-text text-lighten-4">A search application through Brewdog's expansive back catalogue of beer.</p>
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
                <div className="footer-copyright red">
                    <div className="container">
                        © 2017 Planlodge
                        <a className="grey-text text-lighten-4 right" href="//planlodge.com" target="_blank" rel="noopener noreferrer">Portfolio</a>
                    </div>
                </div>

            </footer>

        </div>

    );
}