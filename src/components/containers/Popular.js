import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';
import Loader from '../helpers/loader';
import MixView from '../views/items/MixView';

class Popular extends Component {

    getContent(offset, limit) {
        APIService.getPopularList(offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent(this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    handlePageClick = (data) => {
        let selected = data.selected * this.props.paginationConfig.limit;
        //console.log(selected);

        this.getContent(selected, this.props.paginationConfig.limit);

    };

    render() {
        return (
            <div className="container center-align max-width">
                <DocumentTitle title={"Popular - SoundMix"} />
                <div className="col s12 pushDown"></div>
                <div className={!this.props.isLoading ? 'hidden' : ''}>
                    <Loader />
                </div>
                <div className={this.props.isLoading ? 'hidden' : ''}>
                    <MixView mixList={this.props.popularList.data} />
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

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        popularList: store.api.popularList,
        paginationConfig: store.api.paginationConfig,
        isLoading: store.api.isLoading
    };
};

export default connect(mapStateToProps)(Popular);
