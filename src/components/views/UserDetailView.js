import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button, Icon} from 'react-materialize';
import Moment from 'react-moment';
import {NavLink} from 'react-router-dom';

import FeedView from '../views/FeedView';
import MixView from '../views/MixView';

// Using "Stateless Functional Components"
export default function (props) {
    console.log(props.isLoading);
    return (
        <div>
            <div className={!props.isLoading ? 'hidden' : ''}>Loading...</div>
            <div className={props.isLoading ? 'hidden' : ''}>
                <DocumentTitle title={(props.username || "Loading...") + " - SoundMix"}/>
                <div className="row">
                    <Button className="buttonColor" onClick={props.goBack}>Back</Button>
                </div>
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
                    <div className="container-fluid">
                        <div className="row">
                            <h4>Feed</h4>
                            <FeedView feed={props.feed} />
                            {(() => {
                                if (props.feed.length === 0) {
                                    return <p>No Feed Data Found.</p>
                                }
                                else if (props.feed.length >= 20) {
                                    return <NavLink to={"/feed/" + props.username}>View All</NavLink>
                                }
                            })()}
                        </div>
                    </div>
                    <div className="row">
                        <h4>CloudCasts</h4>
                        <div className="row">
                            <MixView mixList={props.cloudcasts} />
                            {(() => {
                                if (props.cloudcasts.length === 0) {
                                    return <p>No CloudCasts Found.</p>
                                }
                                else if (props.cloudcasts.length >= 20) {
                                    return <NavLink to={"/cloudcasts/" + props.username}>View All</NavLink>
                                }
                            })()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}