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
import UserPlainViewFromList from '../views/items/UserPlainViewFromList';

var tempGenre, tempGenreInternational, tempCity, tempTalk, tempEntertainment;

class Home extends Component {

    getContent(tempGenre, tempGenreInternational, tempCity) {
        APIService.getGeneralList("hot", this.props.paginationConfig.offset, this.props.paginationConfig.limitTeaser);
        APIService.getGeneralList("new", this.props.paginationConfig.offset, this.props.paginationConfig.limitEight);
        APIService.searchByTag(tempGenreInternational, "international", this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.searchByTag(tempTalk, "talk", this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.searchByTag(tempEntertainment, "entertainment", this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.searchByTag(tempGenre, null, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        APIService.getMixListByCity(tempCity.replace(/ /g, '').toLowerCase(), this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    componentDidMount() {

        tempGenre = this.props.genreArray[Math.floor(Math.random()*this.props.genreArray.length)];
        tempGenreInternational = this.props.internationalArray[Math.floor(Math.random()*this.props.internationalArray.length)];
        tempCity = this.props.popularCities[Math.floor(Math.random()*this.props.popularCities.length)];
        tempTalk = this.props.popularTalkCasts[Math.floor(Math.random()*this.props.popularTalkCasts.length)];
        tempEntertainment = this.props.popularEntertainmentCasts[Math.floor(Math.random()*this.props.popularEntertainmentCasts.length)];

        this.getContent(tempGenre, tempGenreInternational, tempCity, tempTalk, tempEntertainment);
    }

    render() {

        return (
            <div className="">
                <DocumentTitle title={"SoundMix - The Best Artists"} />
                <div className="slideshowBanner relative">
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

                        <div className="stripBg pullUpSlight">

                            <div className="container-fluid center-align">

                                {(() => {
                                    if (this.props.discoverTagList.data.length > 0) {
                                        return <div className="relative">
                                                    <h4 className="heading-titles">Best of {tempGenre} Music</h4>
                                                    <p><span className="rightLink"><NavLink to={"/tag/" + tempGenre}>View More</NavLink></span></p>
                                                    <CarouselMixAlbums list={this.props.discoverTagList.data} />
                                                </div>
                                    }
                                })()}

                            </div>

                        </div>

                        <div className="tileBg">

                            <div className="container center-align max-width">

                                {(() => {
                                    if (this.props.hotList.data.length > 0) {
                                        return <div className="relative">
                                            <h4 className="heading-titles">Whats Hot</h4>
                                            <p><span className="rightLink"><NavLink to={"/hot"}>View More</NavLink></span></p>
                                            <MixView mixList={this.props.hotList.data} />
                                        </div>
                                    }
                                })()}

                            </div>
                        </div>

                        <div className="stripBg">
                            <div className="container-fluid center-align">

                                {(() => {
                                    if (this.props.internationalList.data.length > 0) {
                                        return <div className="relative">
                                            <h4 className="heading-titles">Popular Talks In {tempTalk}</h4>
                                            <p><span className="rightLink"><NavLink to={"/tag/" + tempTalk}>View More</NavLink></span></p>
                                            <CarouselMixAlbums list={this.props.talkList.data} />
                                        </div>
                                    }
                                })()}

                            </div>

                        </div>

                        <div className="tileBg">

                            <div className="container-fluid center-align">

                                {(() => {
                                    if (this.props.hotList.data.length > 0) {
                                        return <div className="relative">
                                            <h4 className="heading-titles">Current Active Users</h4>
                                            <p><span className="rightLink"><NavLink to={"/new"}>View More</NavLink></span></p>
                                            <UserPlainViewFromList userList={this.props.newList.data} />
                                        </div>
                                    }
                                })()}

                            </div>
                        </div>

                        <div className="stripBg">
                            <div className="container-fluid center-align">

                                {(() => {
                                    if (this.props.internationalList.data.length > 0) {
                                        return <div className="relative">
                                            <h4 className="heading-titles">{tempGenreInternational} - International</h4>
                                            <p><span className="rightLink"><NavLink to={"/tag/" + tempGenreInternational}>View More</NavLink></span></p>
                                            <CarouselMixAlbums list={this.props.internationalList.data} />
                                        </div>
                                    }
                                })()}

                            </div>

                        </div>

                        <div className="tileBg">

                            <div className="container center-align max-width">

                                {(() => {
                                    if (this.props.newList.data.length > 0) {
                                        return <div className="relative">
                                                    <h4 className="heading-titles">New Releases</h4>
                                                    <p><span className="rightLink"><NavLink to={"/new"}>View More</NavLink></span></p>
                                                    <MixView mixList={this.props.newList.data.filter((i, index) => (index < 3))} />
                                                </div>
                                    }
                                })()}

                            </div>

                        </div>

                        <div className="stripBg">

                            <div className="container-fluid center-align">

                                {(() => {
                                    if (this.props.cityList.data.length > 0) {
                                        return <div className="relative">
                                                    <h4 className="heading-titles">Playlist of {tempCity}</h4>
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
        talkList: store.api.talkList,
        entertainmentList: store.api.entertainmentList,
        paginationConfig: store.api.paginationConfig,
        isLoading: store.api.isLoading,
        genreArray: store.api.genreArray,
        internationalArray: store.api.internationalArray,
        popularCities: store.api.popularCities,
        popularTalkCasts: store.api.popularTalkCasts,
        popularEntertainmentCasts: store.api.popularEntertainmentCasts,
        slideshowBanner: store.api.slideshowBanner
    };
};

export default connect(mapStateToProps)(Home);
