import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import { Parallax } from 'react-parallax';
//import ReactPaginate from 'react-paginate';

//import ArtistList from '../views/ArtistList';

class Home extends Component {

    getContent(offset, limit) {
        APIService.getHotList(offset, limit);
    }

    componentDidMount() {
        this.getContent(0, 20);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);

        this.getContent(selected, 20);

    };

    render() {
        return (
            <div className="">
                <DocumentTitle title={"SoundMix - The Best Artists"} />
                <div className="searchHolder">
                    <Parallax className="banner" bgImage="assets/images/beerBg.jpg" strength={400} />


                </div>

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        hotList: store.api.hotList,
        pageCount: store.api.pageCount,
        offset: store.api.offset
    };
};

export default connect(mapStateToProps)(Home);
