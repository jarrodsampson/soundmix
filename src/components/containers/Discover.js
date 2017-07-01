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

        this.getContent(this.props.searchParamString, selected, 20);

    };

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Discover - SoundMix"} />

                <div className="container">
                    <DiscoverForm onSubmit={this.submit} />
                </div>

                <div className="center-align">
                    <ArtistList data={this.props.discoverTagList.data} />
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

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        discoverTagList: store.api.discoverTagList,
        searchParamString: store.api.searchParamString,
        pageCount: store.api.pageCount,
        offset: store.api.offset
    };
};

export default connect(mapStateToProps)(Discover);
