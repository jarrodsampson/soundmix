
import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

import * as APIService from '../../api/APIService';

class DiscoverForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func
    };

    handleSubmit(e) {
        console.log(e.discoverText);
        APIService.searchByTag(e.discoverText, 0, 20);
        //window.location.replace("/search/" + e.discoverText);
    }

    render() {
        const {fields: {discoverText}, handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field name="discoverText" component="input" type="text" placeholder="Type In A Tag" {...discoverText} />
                <Button className="buttonColor" type="submit"><Icon>search</Icon></Button>
            </form>

        );
    }
}

DiscoverForm = reduxForm({
    // a unique name for the form
    form: 'discoverForm',
    fields: ['discoverText']
})(DiscoverForm);

export default DiscoverForm;
