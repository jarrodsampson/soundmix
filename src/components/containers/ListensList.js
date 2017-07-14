import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as APIService from '../../api/APIService';
import DocumentTitle from 'react-document-title';
import ReactPaginate from 'react-paginate';
import Loader from '../helpers/loader';
import IssueHandler from '../helpers/IssueHandler';
import MusicList from '../views/lists/MusicList';

class ListensList extends Component {

    getContent(id, offset, limit) {
        APIService.getUserListensList(id, offset, limit);
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
                    <DocumentTitle title={(this.props.match.params.id || "User")+ "'s Listens - SoundMix"}/>
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

                                    <MusicList
                                        isLoading = {this.props.isLoading}
                                        goBack={APIService.goBack}
                                        data={this.props.listensList.data}
                                    />

                                    {(() => {
                                        if (this.props.listensList.data.length >= this.props.paginationConfig.limit) {
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

                                        if (this.props.listensList.data.length === 0) {
                                            return <p>No Listens Just Yet...</p>
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
        listensList: store.api.listensList,
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig,
        errorStatus: store.api.errorStatus
    };
};

export default connect(mapStateToProps)(ListensList);
