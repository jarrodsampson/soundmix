import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/UserDetail.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';

import UserDetailSummary from '../views/UserDetailSummary';
import UserDetailPane from '../views/UserDetailPane';
import FollowerList from '../views/lists/FollowerList';
import MusicList from '../views/lists/MusicList';
import FavoritesList from '../views/lists/FavoritesList';
import CloudCastList from '../views/lists/CloudCastList';
import FeedList from '../views/lists/FeedList';
import Loader from '../helpers/loader';
import {Tabs, Tab} from 'react-materialize';
import ReactPaginate from 'react-paginate';

class UserDetail extends Component {

    getContent(id) {
        APIService.getUserDetail(id);
        APIService.getUserPlaylists(id);
        APIService.getUserFeed(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserFollowers(id, this.props.paginationConfig.offset, this.props.paginationConfig.limitWideColumn);
        APIService.getUserFollowing(id, this.props.paginationConfig.offset, this.props.paginationConfig.limitWideColumn);
        APIService.getUserListensList(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserFavorites(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserCloudCasts(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserComments(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    handleFollowersPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserFollowers(this.props.match.params.id, selected, this.props.paginationConfig.limitWideColumn);
        window.scrollTo(0,0);
    };

    handleFollowingPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserFollowing(this.props.match.params.id, selected, this.props.paginationConfig.limitWideColumn);
        window.scrollTo(0,0);
    };

    handleListensPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserListensList(this.props.match.params.id, selected, this.props.paginationConfig.limit);
        window.scrollTo(0,0);
    };

    handleFavoritesPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserFavorites(this.props.match.params.id, selected, this.props.paginationConfig.limit);
        window.scrollTo(0,0);
    };

    handleCloudCastsPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserCloudCasts(this.props.match.params.id, selected, this.props.paginationConfig.limit);
        window.scrollTo(0,0);
    };

    handleFeedPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserFeed(this.props.match.params.id, selected, this.props.paginationConfig.limit);
        window.scrollTo(0,0);
    };

    render() {
        return (
            <div className="center-align">
                <div className="">

                    <div className={!this.props.isLoading ? 'hidden' : ''}>
                        <Loader />
                    </div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>

                        <div>
                            <UserDetailPane
                                {...this.props.userDetails}
                            />
                        </div>

                        <div className="container-fluid tab-area">
                            <Tabs className='tab-demo z-depth-1 tabs-fixed-width'>
                                <Tab title="Summary" active>

                                    <div className="col s12 pushDown"></div>

                                    <UserDetailSummary
                                        goBack={APIService.goBack}
                                        playlists={this.props.playlists.data}
                                        cloudcasts={this.props.cloudcasts.data}
                                        feed={this.props.feed.data}
                                        comments={this.props.comments.data}
                                    />
                                </Tab>
                                <Tab title="Feed">

                                    <div className="col s12 pushDown"></div>

                                    <FeedList
                                        isLoading = {this.props.isLoading}
                                        goBack={APIService.goBack}
                                        feed={this.props.feed.data}
                                    />

                                    <ReactPaginate previousLabel={"Previous"}
                                                   nextLabel={"Next"}
                                                   breakLabel={<a href="">...</a>}
                                                   breakClassName={"break-me"}
                                                   pageCount={this.props.paginationConfig.pageCount}
                                                   marginPagesDisplayed={0}
                                                   pageRangeDisplayed={7}
                                                   onPageChange={this.handleFeedPageClick}
                                                   containerClassName={"pagination"}
                                                   subContainerClassName={"pages pagination"}
                                                   activeClassName={"active"} />

                                </Tab>
                                <Tab title="Followers">
                                    <div className="col s12 pushDown"></div>
                                    <FollowerList
                                        isLoading = {this.props.isLoading}
                                        goBack={APIService.goBack}
                                        followers={this.props.followers.data}
                                    />

                                    {(() => {
                                        if (this.props.followers.data.length >= this.props.paginationConfig.limitWideColumn) {
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

                                        if (this.props.followers.data.length === 0) {
                                            return <p>No Followers Just Yet...</p>
                                        }

                                    })()}


                                </Tab>
                                <Tab title="Following">
                                    <div className="col s12 pushDown"></div>
                                    <FollowerList
                                        isLoading={this.props.isLoading}
                                        goBack={APIService.goBack}
                                        followers={this.props.following.data}
                                    />


                                    {(() => {
                                        if (this.props.following.data.length >= this.props.paginationConfig.limitWideColumn) {
                                            return <ReactPaginate previousLabel={"Previous"}
                                                                  nextLabel={"Next"}
                                                                  breakLabel={<a href="">...</a>}
                                                                  breakClassName={"break-me"}
                                                                  pageCount={this.props.paginationConfig.pageCount}
                                                                  marginPagesDisplayed={0}
                                                                  pageRangeDisplayed={7}
                                                                  onPageChange={this.handleFollowingPageClick}
                                                                  containerClassName={"pagination"}
                                                                  subContainerClassName={"pages pagination"}
                                                                  activeClassName={"active"} />
                                        }

                                        if (this.props.following.data.length === 0) {
                                            return <p>Not Following Anyone Just Yet...</p>
                                        }

                                    })()}

                                </Tab>
                                <Tab title="Listens">
                                    <div className="col s12 pushDown"></div>
                                    <div className="container">
                                        <MusicList
                                            isLoading = {this.props.isLoading}
                                            goBack={APIService.goBack}
                                            data={this.props.listensList.data}
                                        />
                                    </div>

                                    {(() => {
                                        if (this.props.listensList.data.length >= this.props.paginationConfig.limit) {
                                            return <ReactPaginate previousLabel={"Previous"}
                                                                  nextLabel={"Next"}
                                                                  breakLabel={<a href="">...</a>}
                                                                  breakClassName={"break-me"}
                                                                  pageCount={this.props.paginationConfig.pageCount}
                                                                  marginPagesDisplayed={0}
                                                                  pageRangeDisplayed={7}
                                                                  onPageChange={this.handleListensPageClick}
                                                                  containerClassName={"pagination"}
                                                                  subContainerClassName={"pages pagination"}
                                                                  activeClassName={"active"} />
                                        }

                                        if (this.props.listensList.data.length === 0) {
                                            return <p>No Listens Publicly Available.</p>
                                        }

                                    })()}


                                </Tab>
                                <Tab title="Likes">
                                    <div className="col s12 pushDown"></div>
                                    <div className="container">
                                        <FavoritesList
                                            isLoading = {this.props.isLoading}
                                            goBack={APIService.goBack}
                                            favorites={this.props.favorites.data}
                                        />
                                    </div>

                                    {(() => {
                                        if (this.props.favorites.data.length >= this.props.paginationConfig.limit) {
                                            return <ReactPaginate previousLabel={"Previous"}
                                                                  nextLabel={"Next"}
                                                                  breakLabel={<a href="">...</a>}
                                                                  breakClassName={"break-me"}
                                                                  pageCount={this.props.paginationConfig.pageCount}
                                                                  marginPagesDisplayed={0}
                                                                  pageRangeDisplayed={7}
                                                                  onPageChange={this.handleFavoritesPageClick}
                                                                  containerClassName={"pagination"}
                                                                  subContainerClassName={"pages pagination"}
                                                                  activeClassName={"active"} />
                                        }

                                        if (this.props.favorites.data.length === 0) {
                                            return <p>No Likes Publicly Available.</p>
                                        }

                                    })()}


                                </Tab>
                                <Tab title="CloudCasts">
                                    <div className="col s12 pushDown"></div>
                                    <div className="container">
                                        <CloudCastList
                                            isLoading = {this.props.isLoading}
                                            goBack={APIService.goBack}
                                            cloudcasts={this.props.cloudcasts.data}
                                        />
                                    </div>

                                    {(() => {
                                        if (this.props.cloudcasts.data.length >= this.props.paginationConfig.limit) {
                                            return <ReactPaginate previousLabel={"Previous"}
                                                                  nextLabel={"Next"}
                                                                  breakLabel={<a href="">...</a>}
                                                                  breakClassName={"break-me"}
                                                                  pageCount={this.props.paginationConfig.pageCount}
                                                                  marginPagesDisplayed={0}
                                                                  pageRangeDisplayed={7}
                                                                  onPageChange={this.handleCloudCastsPageClick}
                                                                  containerClassName={"pagination"}
                                                                  subContainerClassName={"pages pagination"}
                                                                  activeClassName={"active"} />
                                        }

                                        if (this.props.cloudcasts.data.length === 0) {
                                            return <p>No Cloudcasts Just Yet...</p>
                                        }

                                    })()}

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        userDetails: store.api.userDetails,
        playlists: store.api.playlists,
        cloudcasts: store.api.cloudcasts,
        feed: store.api.feed,
        followers: store.api.followers,
        following: store.api.following,
        listensList: store.api.listensList,
        favorites: store.api.favoriteList,
        comments: store.api.comments,
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(UserDetail);
