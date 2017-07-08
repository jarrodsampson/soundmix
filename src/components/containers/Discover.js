import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';

import MixView from '../views/items/MixView';
import DiscoverForm from '../layouts/DiscoverForm';

class Discover extends Component {

    getContent(tag, offset, limit) {
        APIService.searchByTag(tag, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {}

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);

        this.getContent(this.props.searchParamString, selected, this.props.paginationConfig.limit);

    };

    render() {
        return (
            <div className="">
                <DocumentTitle title={(this.props.searchParamString.replace(/[+]/g, " ") || "Discover") + " - SoundMix"} />

                <div className="container">
                    <DiscoverForm onSubmit={this.submit} />
                </div>

                <div className="center-align container">

                    <div className={!this.props.isLoading ? 'hidden' : ''}></div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>

                        <MixView mixList={this.props.discoverTagList.data} />

                        {(() => {

                            if (this.props.discoverTagList.data.length >= this.props.paginationConfig.limit) {
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

                            if (this.props.discoverTagList.data.length === 0) {
                                return <p>No Results Found...</p>
                            }

                        })()}


                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        discoverTagList: store.api.discoverTagList,
        searchParamString: store.api.searchParamString,
        paginationConfig: store.api.paginationConfig,
        isLoading: store.api.isLoading
    };
};

export default connect(mapStateToProps)(Discover);
