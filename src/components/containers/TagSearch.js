import React, { Component } from 'react';
import { connect } from 'react-redux';
import DocumentTitle from 'react-document-title';
import '../../css/Home.css';
import '../../css/owl.carousel.min.css';
import '../../css/owl.theme.default.min.css';
import * as APIService from '../../api/APIService';
import ReactPaginate from 'react-paginate';
import Loader from '../helpers/loader';
import IssueHandler from '../helpers/IssueHandler';
import MixView from '../views/items/MixView';

class TagSearch extends Component {

    getContent(tag, offset, limit) {
        APIService.getTagSearch(tag, offset, limit);
        window.scrollTo(0,0);
    }

    componentDidMount() {
        this.getContent(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    handlePageClick = (data) => {
        let selected = data.selected * 20;
        //console.log(selected);

        this.getContent(this.props.match.params.id, selected, this.props.paginationConfig.limit);

    };

    tagClick() {
        this.getContent(this.props.match.params.id, this.props.paginationConfig.offset, this.props.paginationConfig.limit);
    }

    render() {
        return (
            <div className="container center-align max-width">

                <DocumentTitle title={(this.props.match.params.id).replace(/[+]/g, " ") + " - SoundMix"} />
                <div className="col s12 pushDown"></div>
                <div className={!this.props.isLoading ? 'hidden' : ''}>
                    <Loader />
                </div>
                <div className={this.props.isLoading ? 'hidden' : ''}>

                    {(() => {
                        if (this.props.errorStatus) {
                            return <IssueHandler requestItem={this.props.match.params.id} />
                        } else {
                            return  <div>

                                <MixView mixList={this.props.tagSearchList.data} onClickTag={this.tagClick} />
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
                                               activeClassName={"active"} />

                            </div>
                        }

                    })()}

                </div>
            </div>
        );
    }
}

const mapStateToProps = function(store) {

    //console.log("Store", store.api);
    return {
        tagSearchList: store.api.tagSearchList,
        paginationConfig: store.api.paginationConfig,
        isLoading: store.api.isLoading,
        errorStatus: store.api.errorStatus
    };
};

export default connect(mapStateToProps)(TagSearch);
