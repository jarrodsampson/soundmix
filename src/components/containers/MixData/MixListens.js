import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as APIService from '../../../api/APIService';
import DocumentTitle from 'react-document-title';
import ReactPaginate from 'react-paginate';
import Loader from '../../helpers/loader';
import FollowerList from '../../views/lists/FollowerList';

class MixListens extends Component {

    getContent(id, offset, limit) {
        APIService.getMixListeners(id, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent((this.props.match.params.user + "/" + this.props.match.params.id), this.props.paginationConfig.offset, this.props.paginationConfig.limitWideColumn);
    }

    shouldComponentUpdate(nextProps, nextState) {
        return false;
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        this.getContent((this.props.match.params.user + "/" + this.props.match.params.id), selected, this.props.paginationConfig.limitWideColumn);
    };

    render() {
        return (
            <div className="center-align">
                <div className="">
                    <DocumentTitle title={(this.props.match.params.id || "User")+ "'s Listeners - SoundMix"}/>
                    <div className="col s12 pushDown"></div>
                    <div className={!this.props.isLoading ? 'hidden' : ''}>
                        <Loader />
                    </div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>
                        <FollowerList
                            isLoading = {this.props.isLoading}
                            goBack={APIService.goBack}
                            followers={this.props.listeners.data}
                        />

                        {(() => {
                            if (this.props.listeners.data.length >= this.props.paginationConfig.limitWideColumn) {
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

                            if (this.props.listeners.data.length === 0) {
                                return <p>No One has heard this Just Yet...</p>
                            }

                        })()}


                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        listeners: store.api.listeners,
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(MixListens);
