import React, { Component } from 'react';
import { connect } from 'react-redux';
//import InfiniteScroll from 'redux-infinite-scroll';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';

import TagList from '../views/search/TagList';
import DiscoverForm from '../layouts/DiscoverForm';

class Discover extends Component {

    getContent(offset, limit) {
        APIService.getNewList(offset, limit);
    }

    componentDidMount() {
        //this.getContent(0, 20);
    }

    handlePageClick = (data) => {
        //let selected = data.selected * 20;
        //console.log(selected);

        //this.getContent(selected, 20);

    };

    render() {
        return (
            <div className="">
                <DocumentTitle title={"Discover - SoundMix"} />

                <DiscoverForm onSubmit={this.submit} />

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
                {/*<TagList data={this.props.discoverList.data} />*/}
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

    console.log("Store", store.api);
    return {
        discoverList: store.api.discoverList.latest,
        pageCount: store.api.pageCount,
        offset: store.api.offset
    };
};

export default connect(mapStateToProps)(Discover);
