import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as APIService from '../../api/APIService';
import DocumentTitle from 'react-document-title';
import ReactPaginate from 'react-paginate';
import Loader from '../helpers/loader';
import IssueHandler from '../helpers/IssueHandler';
import CloudCastList from '../views/lists/CloudCastList';

class FullCloudCasts extends Component {

    getContent(id, offset, limit) {
        APIService.getUserCloudCasts(id, offset, limit);
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
                <div className="container">
                    <DocumentTitle title={(this.props.match.params.id || "User")+ "'s CloudCasts - SoundMix"}/>
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

                                    <CloudCastList
                                        isLoading = {this.props.isLoading}
                                        goBack={APIService.goBack}
                                        cloudcasts={this.props.cloudcasts.data}
                                    />

                                    {(() => {
                                        if (this.props.cloudcasts.data.length >= this.props.paginationConfig.limitWideColumn) {
                                            return <ReactPaginate previousLabel={"Previous"}
                                                                  nextLabel={"Next"}
                                                                  breakLabel={<a href="">...</a>}
                                                                  breakClassName={"break-me"}
                                                                  pageCount={this.props.paginationConfig.pageCount}
                                                                  marginPagesDisplayed={0}
                                                                  pageRangeDisplayed={7}
                                                                  onPageChange={this.handleFollowersPageClick}
                                                                  containerClassName={"pagination"}
                                                                  subContainerClassName={"pages pagination"}
                                                                  activeClassName={"active"} />
                                        }

                                        if (this.props.cloudcasts.data.length === 0) {
                                            return <p>No CloudCasts Just Yet...</p>
                                        }

                                    })()}

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
        cloudcasts: store.api.cloudcasts,
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig,
        errorStatus: store.api.errorStatus
    };
};

export default connect(mapStateToProps)(FullCloudCasts);
