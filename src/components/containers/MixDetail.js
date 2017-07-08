import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import Loader from '../helpers/loader';
import MixDetailView from '../views/MixDetailView';

class MixDetail extends Component {

    getContent(id, offset, limit) {
        APIService.getMixDetail(id);
        APIService.getMixListeners(id, offset, limit);
        APIService.getMixSimilar(id);
        APIService.getMixFavorite(id, offset, limit);
        APIService.getMixComments(id, offset, limit);
    }

    componentDidMount() {
        this.getContent((this.props.match.params.username + "/" + this.props.match.params.slug), this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    albumClick() {
        this.getContent(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    render() {
        return (
            <div className="center-align">
                <div className="container-fluid">
                    <div className={!this.props.isLoading ? 'hidden' : ''}>
                        <Loader />
                    </div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>

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
