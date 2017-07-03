import React from 'react';

import FeedView from '../views/FeedView';
import MixView from '../views/MixView';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log(props.isLoading);
    return (
        <div>
                    <div className="container-fluid">
                        <div className="row">
                            <h4>Feed</h4>
                            <FeedView feed={(props.feed).filter((i, index) => (index < 3))} />
                            {(() => {
                                if (props.feed.length === 0) {
                                    return <p>No Feed Data Found.</p>
                                }
                            })()}
                        </div>
                    </div>
                    <div className="row">
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