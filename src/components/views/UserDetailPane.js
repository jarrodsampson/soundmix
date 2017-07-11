import React from 'react';
import DocumentTitle from 'react-document-title';
import {Icon} from 'react-materialize';
import Moment from 'react-moment';
import {NavLink} from 'react-router-dom';
import { Parallax } from 'react-parallax';

// Using "Stateless Functional Components"
export default function (props) {

    var style = { background: '#' + props.picture_primary_color };

    return (
        <div>
            <DocumentTitle title={(props.username || "Loading...") + " - SoundMix"}/>
            <div className="container-fluid">
                {(() => {
                    if (props.cover_pictures !== undefined) {
                        return <Parallax className="coverPhoto" bgImage={props.cover_pictures['1670wx240h']} strength={200} />
                    } else {
                        return <img className="coverPhoto" src="" alt="" style={style} />
                    }
                })()}
            </div>
            <div className="row detailPane">
                <div className="col s12 card valign-wrapper">
                    <div className="card-content valign-wrapper">
                        <div className="col s12 m4 valign-wrapper">
                            <img className="userPhoto" src={(props.pictures.large || "http://wellington.recollect.co.nz/img/placeholder.gif")} alt={props.username} />
                        </div>

                        <div className="col s12 m6">
                            <span className="card-title">{props.name}</span>

                            {(() => {
                                if (props.listen_count !== undefined) {
                                    return <div className="counts">
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
                                }
                            })()}

                            <div className="justify">
                                {(() => {
                                    if (props.biog !== undefined) {
                                        return <p className="bio-text">{(props.biog || "No Bio Added.")}</p>
                                    }
                                })()}

                                {(() => {
                                    if (props.city !== undefined) {
                                        return <p>HomeTown: {(props.city || "Loading...")}</p>
                                    }
                                })()}

                                {(() => {
                                    if (props.country !== undefined) {
                                        return <p>Country: {(props.country || "Loading...")}</p>
                                    }
                                })()}

                                {(() => {
                                    if (props.created_time !== undefined) {
                                        return <p>Created: <Moment fromNow>{props.created_time}</Moment></p>
                                    }
                                })()}

                                {(() => {
                                    if (props.url !== undefined) {
                                        return <a href={props.url} target="_blank">Full Profile</a>
                                    }
                                })()}
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}