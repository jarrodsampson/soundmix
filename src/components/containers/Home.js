import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import * as APIService from '../../api/APIService';
import Loader from '../helpers/loader';
import {NavLink} from 'react-router-dom';
import MixView from '../views/items/MixView';
import CarouselMixAlbums from '../views/items/CarouselMixAlbums';
import CarouselHomeSlides from '../views/items/CarouselHomeSlides';

var tempGenre;
var tempGenreInternational;
var tempCity;

class Home extends Component {

    getContent(tempGenre, tempGenreInternational, tempCity) {
        APIService.getGeneralList("hot", this.props.paginationConfig.offset, this.props.paginationConfig.limitTeaser);
        APIService.getGeneralList("new", this.props.paginationConfig.offset, this.props.paginationConfig.limitTeaser);
        APIService.searchByTag(tempGenreInternational, "international", this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.searchByTag(tempGenre, null, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getMixListByCity(tempCity.replace(/ /g, '').toLowerCase(), this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    componentDidMount() {

        tempGenre = this.props.genreArray[Math.floor(Math.random()*this.props.genreArray.length)];
        tempGenreInternational = this.props.internationalArray[Math.floor(Math.random()*this.props.internationalArray.length)];
        tempCity = this.props.popularCities[Math.floor(Math.random()*this.props.popularCities.length)];

        this.getContent(tempGenre, tempGenreInternational, tempCity);
    }

    render() {

        return (
            <div className="">
                <DocumentTitle title={"SoundMix - The Best Artists"} />
                <div className="slideshowBanner">
                    <CarouselHomeSlides list={this.props.slideshowBanner} />
                </div>

                <div className="container-fluid">

                    <div className="center-align container max-width">
                        <div className="col s12 pushDown"></div>
                        <div className={!this.props.isLoading ? 'hidden' : ''}>
                            <Loader />
                        </div>
                    </div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>

                        <div className="container-fluid center-align">

                            {(() => {
                                if (this.props.discoverTagList.data.length > 0) {
                                    return <div className="relative">
                                                <h4>Best of {tempGenre} Music</h4>
                                                <p><span className="rightLink"><NavLink to={"/tag/" + tempGenre}>View More</NavLink></span></p>
                                                <CarouselMixAlbums list={this.props.discoverTagList.data} />
                                            </div>
                                }
                            })()}

                        </div>

                        <div className="container center-align max-width">

                            {(() => {
                                if (this.props.hotList.data.length > 0) {
                                    return <div className="relative">
                                        <h4>Whats Hot</h4>
                                        <p><span className="rightLink"><NavLink to={"/hot"}>View More</NavLink></span></p>
                                        <MixView mixList={this.props.hotList.data} />
                                    </div>
                                }
                            })()}

                        </div>

                        <div className="container-fluid center-align">

                            {(() => {
                                if (this.props.internationalList.data.length > 0) {
                                    return <div className="relative">
                                        <h4>{tempGenreInternational} - International</h4>
                                        <p><span className="rightLink"><NavLink to={"/tag/" + tempGenreInternational}>View More</NavLink></span></p>
                                        <CarouselMixAlbums list={this.props.internationalList.data} />
                                    </div>
                                }
                            })()}

                        </div>

                        <div className="container center-align max-width">

                            {(() => {
                                if (this.props.newList.data.length > 0) {
                                    return <div className="relative">
                                                <h4>New Releases</h4>
                                                <p><span className="rightLink"><NavLink to={"/new"}>View More</NavLink></span></p>
                                                <MixView mixList={this.props.newList.data} />
                                            </div>
                                }
                            })()}

                        </div>

                        <div className="container-fluid center-align">

                            {(() => {
                                if (this.props.cityList.data.length > 0) {
                                    return <div className="relative">
                                                <h4>Playlist of {tempCity}</h4>
                                                <p><span className="rightLink"><NavLink to={"/city"}>Search Your City</NavLink></span></p>
                                                <CarouselMixAlbums list={this.props.cityList.data} />
                                                <div className="col s12 pushDown"></div>
                                            </div>
                                }
                            })()}

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
        hotList: store.api.hotList,
        newList: store.api.newList,
        discoverTagList: store.api.discoverTagList,
        cityList: store.api.cityList,
        internationalList: store.api.internationalList,
        paginationConfig: store.api.paginationConfig,
        isLoading: store.api.isLoading,
        genreArray: store.api.genreArray,
        internationalArray: store.api.internationalArray,
        popularCities: store.api.popularCities,
        slideshowBanner: store.api.slideshowBanner
    };
};

export default connect(mapStateToProps)(Home);
