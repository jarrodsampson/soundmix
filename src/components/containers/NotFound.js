import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import * as APIService from '../../api/APIService';
import {Button} from 'react-materialize';

class NotFound extends Component {

    componentDidMount() {}

    render() {
        return (
            <div className="">
                <DocumentTitle title={"404 Issue - No Music Here"} />
                <div className="container center-align">
                    <div className="col s12 pushDown"></div>
                    <h4>404 Error</h4>
                    <p>Sorry, the page your requested cannot be found. Please try your search again.</p>
                    <p>There is no music here...</p>

                    <div className="row">
                        <Button className="buttonColor" onClick={APIService.goBack}>Back</Button>
                    </div>

                </div>

            </div>
        );
    }
}

export default NotFound;
