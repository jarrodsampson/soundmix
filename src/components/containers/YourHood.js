import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import * as APIService from '../../api/APIService';
import * as LocationService from '../../api/LocationService';

import {geolocated} from 'react-geolocated';

import MusicList from '../views/MusicList';

import ReactPaginate from 'react-paginate';

var count = 0;

class YourHood extends Component {

    getCityByLatLng(lat, lng, offset, limit){
        LocationService.getCityByLatLng(33.9075655, -118.3218477, offset, limit);
        //LocationService.getCityByLatLng(lat, lng);
    }

    getCityByName(city, offset, limit){
        APIService.getMixListByCity(city, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        if (this.props.match.params.id !== undefined) {
            this.getCityByName(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
        }
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);
        this.getCityByName(this.props.searchParamString, selected, this.props.paginationConfig.limit);
    };

    handlePageIdClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);
        this.getCityByName(this.props.match.params.id, selected, this.props.paginationConfig.limit);
    };

    render() {
        return (
            <div className="container">
                <DocumentTitle title={ (this.props.searchParamString || "Your Hood") + " - The Best Artists"} />
                <div className="center-align">

                    <div className={!this.props.isLoading ? 'hidden' : ''}><div className="dataLoader"> Loading...</div></div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>
                        {(() => {

                            if (this.props.match.params.id === undefined) {

                                if (!this.props.isGeolocationAvailable) {
                                    return <div>Your browser does not support Geolocation</div>
                                } else if (!this.props.isGeolocationEnabled) {
                                    return <div>Geolocation is not enabled</div>
                                } else if (this.props.coords) {
                                    if (count < 1) {
                                        this.getCityByLatLng(
                                            this.props.coords.latitude,
                                            this.props.coords.longitude,
                                            this.props.paginationConfig.offset,
                                            this.props.paginationConfig.limit
                                        );
                                        count++;
                                    }
                                    return <div>
                                        <MusicList
                                            isLoading={this.props.isLoading}
                                            goBack={APIService.goBack}
                                            data={this.props.cityList.data}
                                        />

                                        <ReactPaginate previousLabel={"Previous"}
                                                       nextLabel={"Next"}
                                                       breakLabel={<a href="">...</a>}
                                                       breakClassName={"break-me"}
                                                       pageCount={this.props.paginationConfig.pageCount}
                                                       marginPagesDisplayed={0}
                                                       pageRangeDisplayed={7}
                                                       onPageChange={this.handlePageClick}
                                                       containerClassName={"pagination"}
                                                       subContainerClassName={"pages pagination"}
                                                       activeClassName={"active"}
                                        />

                                    </div>
                                }
                            }
                            else {
                                return <div>
                                            <MusicList
                                                isLoading={this.props.isLoading}
                                                goBack={APIService.goBack}
                                                data={this.props.cityList.data}
                                            />


                                            <ReactPaginate previousLabel={"Previous"}
                                                           nextLabel={"Next"}
                                                           breakLabel={<a href="">...</a>}
                                                           breakClassName={"break-me"}
                                                           pageCount={this.props.paginationConfig.pageCount}
                                                           marginPagesDisplayed={0}
                                                           pageRangeDisplayed={7}
                                                           onPageChange={this.handlePageIdClick}
                                                           containerClassName={"pagination"}
                                                           subContainerClassName={"pages pagination"}
                                                           activeClassName={"active"}
                                            />
                                        </div>
                            }
                        })()}
                    </div>

                </div>

            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        cityList: store.api.cityList,
        paginationConfig: store.api.paginationConfig,
        isLoading: store.api.isLoading,
        searchParamString: store.api.searchParamString
    };
};

export default geolocated({
    positionOptions: {
        enableHighAccuracy: false,
    },
    userDecisionTimeout: 5000,
})(connect(mapStateToProps)(YourHood));
