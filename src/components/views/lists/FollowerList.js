import React from 'react';

import UserPlainView from '../items/UserPlainView';

// Using "Stateless Functional Components"
export default function(props) {
    //console.log("Ps", props);
    return (

        <UserPlainView userList={props.followers} />

    );
}