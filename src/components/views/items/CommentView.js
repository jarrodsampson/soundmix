import React from 'react';
import Moment from 'react-moment';
import Truncate from 'react-truncate';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.commentList.map((item, i) => {
                return (
                    <div key={i} className="col s12 m6 l4 feedBox">
                        <div className="card hoverable">
                            <div className="card-content">
                                              <span className="card-title">"{item.comment}" {item.user.username}

                                              </span>
                                <p>
                                    <Moment fromNow>{item.submit_date}</Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}