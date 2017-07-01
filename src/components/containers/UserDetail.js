import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/UserDetail.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';

import UserDetailView from '../views/UserDetailView';

class UserDetail extends Component {

    getContent(id) {
        APIService.getUserDetail(id);
        APIService.getUserPlaylists(id);
        APIService.getUserCloudCasts(id);
        APIService.getUserFeed(id, 0, 20);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    render() {
        return (
            <div className="center-align">
                <div className="">
                    <UserDetailView
                        {...this.props.userDetails}
                        isLoading = {this.props.isLoading}
                        goBack={APIService.goBack}
                        playlists={this.props.playlists.data}
                        cloudcasts={this.props.cloudcasts.data}
                        feed={this.props.feed.data}
                    />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        userDetails: store.api.userDetails,
        playlists: store.api.playlists,
        cloudcasts: store.api.cloudcasts,
        feed: store.api.feed,
        isLoading: store.api.isLoading
    };
};

export default connect(mapStateToProps)(UserDetail);
