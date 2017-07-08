
import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';

import * as APIService from '../../api/APIService';


const validate = values => {
    const errors = {};
    if (!values.discoverText) {
        errors.discoverText = 'Required'
    }
    return errors
};

class DiscoverForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func
    };

    handleSubmit(e) {
        //console.log((e.discoverText).replace(/ /g, "+"));
        APIService.searchByTag((e.discoverText).replace(/ /g, "+"), 0, 21);
    }

    render() {
        const {handleSubmit, pristine, submitting} = this.props;

        const renderField = ({
            input,
            label,
            type,
            meta: { touched, error, warning }
        }) => (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} placeholder={label} type={type} />
                    {touched &&
                    ((error && <span>{error}</span>))}
                </div>
            </div>
        );

        return (
            <form onSubmit={handleSubmit(this.handleSubmit)}>
                <Field
                    name="discoverText"
                    type="text"
                    component={renderField}
                    label="Search Genre"
                />
                <div>
                    <Button type="submit" className="buttonColor deep-purple darken-1 waves-effect waves-light" disabled={pristine || submitting}><Icon>search</Icon></Button>
                </div>
            </form>

        );
    }
}

DiscoverForm = reduxForm({
    // a unique name for the form
    form: 'discoverForm',
    validate
})(DiscoverForm);

export default DiscoverForm;
