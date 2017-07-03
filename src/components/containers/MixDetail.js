import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';

import MixDetailView from '../views/MixDetailView';

class MixDetail extends Component {

    getContent(id) {
        APIService.getMixDetail(id);
        APIService.getMixListeners(id);
        APIService.getMixSimilar(id);
        APIService.getMixFavorite(id);
        APIService.getMixComments(id);
    }

    componentDidMount() {
        this.getContent((this.props.match.params.username + "/" + this.props.match.params.slug));
    }

    albumClick() {
        this.getContent(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    render() {
        return (
            <div className="">
                <div className="">

                    <MixDetailView
                        {...this.props.mixDetails}
                        listeners={this.props.listeners.data}
                        suggestions={this.props.suggestions.data}
                        favorites={this.props.favoriteList.data}
                        comments={this.props.commentsList.data}
                        goBack={APIService.goBack}
                        onClickAlbum={this.albumClick}
                        isLoading = {this.props.isLoading}
                    />

                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        mixDetails: store.api.mixDetails,
        listeners: store.api.listeners,
        suggestions: store.api.suggestions,
        favoriteList: store.api.favoriteList,
        commentsList: store.api.commentsList,
        isLoading: store.api.isLoading,
        paginationConfig: store.api.paginationConfig
    };
};

export default connect(mapStateToProps)(MixDetail);
