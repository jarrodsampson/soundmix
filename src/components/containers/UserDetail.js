import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/UserDetail.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';

import UserDetailSummary from '../views/UserDetailSummary';
import UserDetailPane from '../views/UserDetailPane';
import FollowerList from '../views/FollowerList';
import MusicList from '../views/MusicList';
import FavoritesList from '../views/FavoritesList';
import CloudCastList from '../views/CloudCastList';
import FeedList from '../views/FeedList';

import {Tabs, Tab} from 'react-materialize';
import ReactPaginate from 'react-paginate';

class UserDetail extends Component {

    getContent(id) {
        APIService.getUserDetail(id);
        APIService.getUserPlaylists(id);
        APIService.getUserFeed(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserFollowers(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserFollowing(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserListensList(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserFavorites(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getUserCloudCasts(id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    handleFollowersPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserFollowers(this.props.match.params.id, selected, this.props.paginationConfig.limit);
        window.scrollTo(0,0);
    };

    handleFollowingPageClick = (data) => {
        let selected = data.selected * 20;
        APIService.getUserFollowing(this.props.match.params.id, selected, this.props.paginationConfig.limit);
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

                    <div className={!this.props.isLoading ? 'hidden' : ''}>Loading...</div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>

                        <UserDetailPane
                            {...this.props.userDetails}
                        />

                        <Tabs className='tab-demo z-depth-1'>
                            <Tab title="Summary" active>
                                <UserDetailSummary
                                    goBack={APIService.goBack}
                                    playlists={this.props.playlists.data}
                                    cloudcasts={this.props.cloudcasts.data}
                                    feed={this.props.feed.data}
                                />
                            </Tab>
                            <Tab title="Feed" active>
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
                            <Tab title="Followers" active>
                                <FollowerList
                                    isLoading = {this.props.isLoading}
                                    goBack={APIService.goBack}
                                    followers={this.props.followers.data}
                                />

                                <ReactPaginate previousLabel={"Previous"}
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

                            </Tab>
                            <Tab title="Following" active>
                                <FollowerList
                                    isLoading = {this.props.isLoading}
                                    goBack={APIService.goBack}
                                    followers={this.props.following.data}
                                />

                                <ReactPaginate previousLabel={"Previous"}
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

                            </Tab>
                            <Tab title="Listens" active>
                                <MusicList
                                    isLoading = {this.props.isLoading}
                                    goBack={APIService.goBack}
                                    data={this.props.listensList.data}
                                />

                                <ReactPaginate previousLabel={"Previous"}
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

                            </Tab>
                            <Tab title="Likes" active>
                                <FavoritesList
                                    isLoading = {this.props.isLoading}
                                    goBack={APIService.goBack}
                                    favorites={this.props.favorites.data}
                                />

                                <ReactPaginate previousLabel={"Previous"}
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

                            </Tab>
                            <Tab title="CloudCasts" active>
                                <CloudCastList
                                    isLoading = {this.props.isLoading}
                                    goBack={APIService.goBack}
                                    cloudcasts={this.props.cloudcasts.data}
                                />

                                <ReactPaginate previousLabel={"Previous"}
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

                            </Tab>
                        </Tabs>
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
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(UserDetail);
