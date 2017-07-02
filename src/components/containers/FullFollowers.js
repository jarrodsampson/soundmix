import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as APIService from '../../api/APIService';

import ReactPaginate from 'react-paginate';

import FollowerList from '../views/FollowerList';

class FullFollowers extends Component {

    getContent(id, offset, limit) {
        APIService.getUserFollowers(id, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id, 0, 21);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        this.getContent(this.props.match.params.id, selected, 21);
    };

    render() {
        return (
            <div className="center-align">
                <div className="">

                    <div className={!this.props.isLoading ? 'hidden' : ''}>Loading...</div>
                    <div className={this.props.isLoading ? 'hidden' : ''}>
                        <FollowerList
                            isLoading = {this.props.isLoading}
                            goBack={APIService.goBack}
                            followers={this.props.followers.data}
                        />

                        <ReactPaginate previousLabel={"Previous"}
                                       nextLabel={"Next"}
                                       breakLabel={<a href="">...</a>}
                                       breakClassName={"break-me"}
                                       pageCount={this.props.pageCount}
                                       marginPagesDisplayed={0}
                                       pageRangeDisplayed={7}
                                       onPageChange={this.handlePageClick}
                                       containerClassName={"pagination"}
                                       subContainerClassName={"pages pagination"}
                                       activeClassName={"active"} />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    console.log("Store", store.api);
    return {
        followers: store.api.followers,
        isLoading: store.api.isLoading
    };
};

export default connect(mapStateToProps)(FullFollowers);
