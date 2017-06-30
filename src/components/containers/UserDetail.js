import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';

import UserDetailView from '../views/UserDetailView';

class UserDetail extends Component {

    getContent(id) {
        APIService.getUserDetail(id);
        APIService.getUserPlaylists(id);
        APIService.getUserCloudCasts(id);
        APIService.getUserFeed(id);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id);
    }

    render() {
        return (
            <div className="">
                <div className="">
                    <UserDetailView {...this.props.userDetails} goBack={APIService.goBack} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api.hotList.data);
    return {
        userDetails: store.api.userDetails
    };
};

export default connect(mapStateToProps)(UserDetail);
