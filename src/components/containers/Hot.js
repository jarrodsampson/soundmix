import React, { Component } from 'react';
import { connect } from 'react-redux';
//import InfiniteScroll from 'redux-infinite-scroll';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';

import ArtistList from '../views/ArtistList';

class Hot extends Component {

    getContent(offset, limit) {
        APIService.getHotList(offset, limit);
    }

    componentDidMount() {
        this.getContent(0, 20);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);

        this.getContent(selected, 20);

    };

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Hot - SoundMix"} />

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
                        <ArtistList data={this.props.hotList.data} />
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

    //console.log("Store", store.api.hotList.data);
    return {
        hotList: store.api.hotList,
        pageCount: store.api.pageCount,
        offset: store.api.offset
    };
};

export default connect(mapStateToProps)(Hot);
