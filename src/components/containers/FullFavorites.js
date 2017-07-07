import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as APIService from '../../api/APIService';
import DocumentTitle from 'react-document-title';
import ReactPaginate from 'react-paginate';
import Loader from '../helpers/loader';
import FavoritesList from '../views/lists/FavoritesList';

class FullFavorites extends Component {

    getContent(id, offset, limit) {
        APIService.getUserFavorites(id, offset, limit);
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
                    <DocumentTitle title={(this.props.match.params.id || "User")+ "'s Favorites - SoundMix"}/>
                    <div className="col s12 pushDown"></div>
                    <div className={!this.props.isLoading ? 'hidden' : ''}>
                        <Loader />
                    </div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>
                        <FavoritesList
                            isLoading = {this.props.isLoading}
                            goBack={APIService.goBack}
                            favorites={this.props.favorites.data}
                        />

                        {(() => {
                            if (this.props.favorites.data.length >= this.props.paginationConfig.limit) {
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

                            if (this.props.favorites.data.length === 0) {
                                return <p>No Favorites Just Yet...</p>
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
        favorites: store.api.favoriteList,
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(FullFavorites);
