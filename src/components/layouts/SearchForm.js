
import React, {Component} from 'react'
import { Field, reduxForm } from 'redux-form'
import {Button, Icon} from 'react-materialize';
import PropTypes from 'prop-types';
import serialize from 'form-serialize';
import { connect } from 'react-redux';

import * as APIService from '../../api/APIService';


class SearchForm extends Component {
    static propTypes = {
        handleSubmit: PropTypes.func
    };

    handleSubmit(e) {
        let form = serialize(document.querySelector('#searchData'));
        //console.log(form);
        APIService.searchByParams(form, 0, 21);
        //window.location.replace("/search/" + e.discoverText);
    }

    render() {
        const {fields: {textText, userOption, tagOption, uploadOption}, handleSubmit} = this.props;

        return (
            <form id="searchData" onSubmit={handleSubmit(this.handleSubmit)}>
                <div className="row">
                    <div className="col s12">
                        <Field name="q" component="input" type="text" placeholder="Text" {...textText} />
                        <div className="col s12">
                            <label>Type</label>
                            <div className="col s12">

                                <label>
                                    <Field name="type" component="input" type="radio" value="user" {...userOption} />
                                    {' '}
                                    User
                                </label>
                                <label>
                                    <Field name="type" component="input" type="radio" value="tag" {...tagOption} />
                                    {' '}
                                    Tag
                                </label>
                                <label>
                                    <Field name="type" component="input" type="radio" value="cloudcast" {...uploadOption} />
                                    {' '}
                                    Upload
                                </label>
                            </div>
                        </div>
                        <Button className="buttonColor deep-purple darken-1 waves-effect waves-light" type="submit"><Icon>search</Icon></Button>
                     </div>
                 </div>
            </form>

        );
    }
}

SearchForm = reduxForm({
    // a unique name for the form
    form: 'searchForm',
    fields: ['textText','maleText','femaleText']
})(SearchForm);

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(SearchForm);
