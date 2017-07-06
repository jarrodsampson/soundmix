import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';

import TagList from '../views/search/TagList';
import UserView from '../views/items/UserView';
import MixView from '../views/items/MixView';
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
        //console.log(this.props.searchParamString);
        this.getContent(this.props.searchParamString, selected, this.props.paginationConfig.limit);

    };

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Search - SoundMix"} />

                <SearchForm onSubmit={this.submit} />


                {(() => {
                    console.log("EMBER", (this.props.searchParamString).match(/user/g));
                    if ((this.props.searchParamString).match(/user/g)) {
                        return <UserView userList={this.props.searchResults.data} />
                    } else if ((this.props.searchParamString).match(/cloudcast/g)) {
                        return <MixView mixList={this.props.searchResults.data} />
                    }

                })()}

                {(() => {

                    if (this.props.searchResults.data.length >= this.props.paginationConfig.limit) {
                        return <ReactPaginate previousLabel={"Previous"}
                                              nextLabel={"Next"}
                                              breakLabel={<a href="">...</a>}
                                              breakClassName={"break-me"}
                                              pageCount={this.props.paginationConfig.pageCount}
                                              marginPagesDisplayed={0}
                                              pageRangeDisplayed={7}
                                              onPageChange={this.handlePageClick}
                                              containerClassName={"pagination"}
                                              subContainerClassName={"pages pagination"}
                                              activeClassName={"active"} />
                    }

                    if (this.props.searchResults.data.length === 0) {
                        return <p>No Results Found...</p>
                    }

                })()}


            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        searchResults: store.api.searchResults,
        searchParamString: store.api.searchParamString,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(Search);
