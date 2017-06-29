import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';

import TagList from '../views/search/TagList';
import SearchForm from '../layouts/SearchForm';

class Search extends Component {

    getContent(params, offset, limit) {
        APIService.searchByParams(params, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        //this.getContent(0, 20);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);
        this.getContent(this.props.searchParamString, selected, 20);

    };

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Search - SoundMix"} />

                <SearchForm onSubmit={this.submit} />


                <TagList data={this.props.searchResults.data} />
                <ReactPaginate previousLabel={"Previous"}
                               nextLabel={"Next"}
                               breakLabel={<a href="">...</a>}
                               breakClassName={"break-me"}
                               pageCount={this.props.pageCount}
                               marginPagesDisplayed={0}
                               pageRangeDisplayed={7}
                               onPageChange={this.handlePageClick}
                               containerClassName={"pagination"}
                               subContainerClassName={"pages pagination"}
                               activeClassName={"active"} />


            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        searchResults: store.api.searchResults,
        searchParamString: store.api.searchParamString,
        pageCount: store.api.pageCount,
        offset: store.api.offset
    };
};

export default connect(mapStateToProps)(Search);
