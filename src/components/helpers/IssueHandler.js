import React, { Component } from 'react';
import {Button} from 'react-materialize';
import * as APIService from '../../api/APIService';

class IssueHandler extends Component {
    componentDidUpdate(prevProps) {}

    render() {
        return (
            <div className="container-fluid issueBox">
                <div className="container">
                    <h4>Uh Oh... Something went wrong with this search!</h4>
                    <p>The Request you have made for {this.props.requestItem} cannot be completed at this time.</p>
                    <p>Please try again later, or try a new search.</p>
                    <div className="row">
                        <Button className="buttonColor waves-effect waves-light deep-purple darken-1" onClick={APIService.goBack}>Back</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default IssueHandler
