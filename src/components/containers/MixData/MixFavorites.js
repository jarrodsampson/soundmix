import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as APIService from '../../../api/APIService';
import DocumentTitle from 'react-document-title';
import ReactPaginate from 'react-paginate';
import Loader from '../../helpers/loader';
import IssueHandler from '../../helpers/IssueHandler';
import FollowerList from '../../views/lists/FollowerList';

class MixFavorites extends Component {

    getContent(id, offset, limit) {
        APIService.getMixFavorite(id, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent((this.props.match.params.user + "/" + this.props.match.params.id), this.props.paginationConfig.offset, this.props.paginationConfig.limitWideColumn);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        this.getContent((this.props.match.params.user + "/" + this.props.match.params.id), selected, this.props.paginationConfig.limitWideColumn);
    };

    render() {
        return (
            <div className="center-align">
                <div className="">
                    <DocumentTitle title={(this.props.match.params.id || "User")+ "'s Favorites - SoundMix"}/>
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

                                    <FollowerList
                                        isLoading = {this.props.isLoading}
                                        goBack={APIService.goBack}
                                        followers={this.props.favoriteList.data}
                                    />

                                    {(() => {
                                        if (this.props.favoriteList.data.length >= this.props.paginationConfig.limitWideColumn) {
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

                                        if (this.props.favoriteList.data.length === 0) {
                                            return <p>No Favorites Just Yet...</p>
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

    console.log("Store", store.api);
    return {
        favoriteList: store.api.favoriteList,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(MixFavorites);
