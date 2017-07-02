import React from 'react';

import MixView from './MixView';

// Using "Stateless Functional Components"
export default function(props) {
    //console.log("Ps", props);
    return (

        <MixView mixList={props.favorites} />

    );
}