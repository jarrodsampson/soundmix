import React from 'react';

import MixView from '../items/MixView';

// Using "Stateless Functional Components"
export default function(props) {
    //console.log("Ps", props);
    return (

        <MixView mixList={props.cloudcasts} />

    );
}