import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as APIService from '../../api/APIService';
import Loader from '../helpers/loader';
import IssueHandler from '../helpers/IssueHandler';
import ReactPaginate from 'react-paginate';
import DocumentTitle from 'react-document-title';
import FeedList from '../views/lists/FeedList';

class FullFeed extends Component {

    getContent(id, offset, limit) {
        APIService.getUserFeed(id, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        this.getContent(this.props.match.params.id, selected, this.props.paginationConfig.limit);
    };

    render() {
        return (
            <div className="center-align">
                <div className="">
                    <DocumentTitle title={(this.props.match.params.id || "User")+ "'s Feed - SoundMix"}/>
                    <div className="col s12 pushDown"></div>
                    <div className={!this.props.isLoading ? 'hidden' : ''}>
                        <Loader />
                    </div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>

                        {(() => {
                            if (this.props.errorStatus) {
                                return <IssueHandler requestItem={this.props.match.params.id} />
                            } else {
                                return  <div>

                                    <FeedList
                                        isLoading = {this.props.isLoading}
                                        goBack={APIService.goBack}
                                        feed={this.props.feed.data}
                                    />

                                    {(() => {
                                        if (this.props.feed.data.length === 0) {
                                            return <p>Nothing in Feed Just Yet...</p>
                                        }

                                    })()}

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
        feed: store.api.feed,
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig,
        errorStatus: store.api.errorStatus
    };
};

export default connect(mapStateToProps)(FullFeed);
