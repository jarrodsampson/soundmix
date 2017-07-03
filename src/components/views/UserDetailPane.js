import React from 'react';
import DocumentTitle from 'react-document-title';
import {Icon} from 'react-materialize';
import Moment from 'react-moment';
import {NavLink} from 'react-router-dom';


// Using "Stateless Functional Components"
export default function (props) {
    //console.log(props.isLoading);
    return (
        <div>
            <DocumentTitle title={(props.username || "Loading...") + " - SoundMix"}/>
            <div className="container-fluid">
                <img className="coverPhoto" src={props.cover_pictures['1670wx240h']} alt={props.username}/>
            </div>
            <div className="row">
                <div className="col s12 card">
                    <div className="card-content">
                        <div className="col s12 m6">
                            <img src={props.pictures.large} alt={props.username} />
                        </div>
                        <div className="col s12 m6">
                            <span className="card-title">{props.name}</span>
                            <p>{props.biog}</p>
                            <p>{props.city}</p>
                            <p>{props.country}</p>
                            <p>
                                Created:
                                <Moment fromNow>{props.created_time}</Moment>
                            </p>
                            <div className="counts">
                                <div className="">
                                    <p>
                                        <Icon>message</Icon>
                                        <NavLink to={"/cloudcasts/" + props.username}><span>{props.cloudcast_count}</span></NavLink>
                                    </p>
                                </div>
                                <div className="">
                                    <p>
                                        <Icon>visibility</Icon>
                                        <NavLink to={"/listens/" + props.username}><span>{props.listen_count}</span></NavLink>
                                    </p>
                                </div>
                                <div className="">
                                    <p>
                                        <Icon>star</Icon>
                                        <NavLink to={"/favorites/" + props.username}><span>{props.favorite_count}</span></NavLink>
                                    </p>
                                </div>
                                <div className="">
                                    <p>
                                        <Icon>perm_identity</Icon>
                                        <NavLink to={"/following/" + props.username}><span>{props.following_count}</span></NavLink>
                                    </p>
                                </div>
                                <div className="">
                                    <p>
                                        <Icon>repeat</Icon>
                                        <NavLink to={"/followers/" + props.username}><span>{props.follower_count}</span></NavLink>
                                    </p>
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