import React from 'react';
import Moment from 'react-moment';
import Truncate from 'react-truncate';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.feed.map((item, i) => {
                return (
                    <div key={i} className="col s12 m6 l4 feedBox">
                        <div className="card hoverable">
                            <div className="card-content">
                                              <span className="card-title">{item.from.username} {item.title}
                                                  {(() => {
                                                      switch (item.type) {
                                                          case "follow":
                                                              return item.users.map((user, i) => {
                                                                  return <span className="card-title"
                                                                               key={i}>{user.username}</span>
                                                              });
                                                          case "upload":
                                                          case "favorite":
                                                          case "listen":
                                                              return item.cloudcasts.map((cast, i) => {
                                                                  return <span className="card-title"
                                                                               key={i}>{cast.name}</span>
                                                              });
                                                          case "cloudcast_comment":
                                                              return <span className="card-title">On a Cast: &ldquo;
                                                                  <Truncate lines={1} ellipsis={<span>...</span>}>
                                                                            {item.description}
                                                                        </Truncate>
                                                                  &rdquo;</span>;
                                                          default:
                                                              return "";
                                                      }
                                                  })()}
                                              </span>
                                <p>
                                    <Moment fromNow>{item.created_time}</Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}