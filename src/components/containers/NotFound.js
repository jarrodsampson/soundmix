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
                    <h4>404 Error</h4>


                    <div className="row">
                        <Button className="buttonColor" onClick={APIService.goBack}>Back</Button>
                    </div>

                </div>

            </div>
        );
    }
}

export default NotFound;
