import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button, Icon} from 'react-materialize';
import Moment from 'react-moment';

// Using "Stateless Functional Components"
export default function(props) {
    return (
        <div className="book">
            <DocumentTitle title={props.username + " - SoundMix"} />
            <div className="row">
                <Button className="red" onClick={props.goBack}>Back</Button>
            </div>

            <div className=""><img src={props.cover_pictures['1670wx240h']} /></div>

            <div className="row">

                <div className="col s12 card">
                    <div className="card-content">

                        <div className="col s12 m6">
                            <img src={props.pictures.large} />
                        </div>

                        <div className="col s12 m6">
                            <span className="card-title">{props.name}</span>
                            <p>{props.biog}</p>
                            <p>{props.city}</p>
                            <p>{props.country}</p>
                            <p>Created: <Moment fromNow>{props.created_time}</Moment></p>


                            <div className="counts">
                                <div className="">
                                    <p><Icon>message</Icon><span>{props.cloudcast_count}</span></p>
                                </div>
                                <div className="">
                                    <p><Icon>visibility</Icon><span>{props.listen_count}</span></p>
                                </div>
                                <div className="">
                                    <p><Icon>star</Icon><span>{props.favorite_count}</span></p>
                                </div>
                                <div className="">
                                    <p><Icon>perm_identity</Icon><span>{props.following_count}</span></p>
                                </div>
                                <div className="">
                                    <p><Icon>repeat</Icon><span>{props.follower_count}</span></p>
                                </div>
                            </div>

                            <div>
                                <p>
                                    <a href={props.url} target="_blank">Full Profile</a>
                                </p>
                            </div>

                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}