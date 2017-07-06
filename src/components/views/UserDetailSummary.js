import React from 'react';

import FeedView from '../views/items/FeedView';
import MixView from '../views/items/MixView';
import CarouselCommentView from '../views/items/CarouselCommentView';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log(props.isLoading);
    return (
        <div className="container-fluid">
                    <div className="">
                        <div className="row col s12">
                            <h4>Feed</h4>
                            <FeedView feed={(props.feed).filter((i, index) => (index < 3))} />
                            {(() => {
                                if (props.feed.length === 0) {
                                    return <p>No Feed Data Found.</p>
                                }
                            })()}
                        </div>
                    </div>
                    <div className="">
                        <div className="row">
                            <h4>Recent Comments</h4>
                            <div className="row col s12">
                                <CarouselCommentView commentList={props.comments} />
                                {(() => {
                                    if (props.comments.length === 0) {
                                        return <p>No Comments Found.</p>
                                    }
                                })()}
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <h4>CloudCasts</h4>
                        <div className="row">
                            <MixView mixList={(props.cloudcasts).filter((i, index) => (index < 3))} />
                            {(() => {
                                if (props.cloudcasts.length === 0) {
                                    return <p>No CloudCasts Found.</p>
                                }
                            })()}
                        </div>
                    </div>
        </div>
    );
}