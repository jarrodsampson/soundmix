import React from 'react';

import FeedView from '../items/FeedView';

// Using "Stateless Functional Components"
export default function(props) {
    //console.log("Ps", props);
    return (

        <FeedView feed={props.feed} />

    );
}