import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/ArtistList.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';

import ArtistList from '../views/ArtistList';

class New extends Component {

    getContent(offset, limit) {
        APIService.getNewList(offset, limit);
        window.scrollTo(0,0);
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
            <div className="container center-align max-width">
                <DocumentTitle title={"New - SoundMix"} />

                <div className={!this.props.isLoading ? 'hidden' : ''}>Loading...</div>
                <div className={this.props.isLoading ? 'hidden' : ''}>
                    <ArtistList data={this.props.newList.data} />
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

    //console.log("Store", store.api);
    return {
        newList: store.api.newList,
        pageCount: store.api.pageCount,
        offset: store.api.offset,
        isLoading: store.api.isLoading
    };
};

export default connect(mapStateToProps)(New);
