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

class TagSearch extends Component {

    getContent(tag, offset, limit) {
        APIService.getTagSearch(tag, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);

        this.getContent(this.props.match.params.id, selected, this.props.paginationConfig.limit);

    };

    tagClick() {
        this.getContent(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    render() {
        return (
            <div className="container center-align max-width">

                <DocumentTitle title={(this.props.match.params.id).replace(/[+]/g, " ") + " - SoundMix"} />


                <ArtistList data={this.props.tagSearchList.data} onClickTag={this.tagClick} />
                <ReactPaginate previousLabel={"Previous"}
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


            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api.hotList.data);
    return {
        tagSearchList: store.api.tagSearchList,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(TagSearch);
