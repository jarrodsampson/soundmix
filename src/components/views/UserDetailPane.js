import React from 'react';
import DocumentTitle from 'react-document-title';
import {Icon} from 'react-materialize';
import Moment from 'react-moment';
import {NavLink} from 'react-router-dom';


// Using "Stateless Functional Components"
export default function (props) {
    let coverImage;

    if ((props.cover_pictures['1670wx240h'] || "none") === undefined) {
        coverImage = "http://www.publicdomainpictures.net/pictures/150000/velka/banner-header-tapete-145002399028x.jpg";
    } else {
        coverImage = (props.cover_pictures['1670wx240h'] || "None");
    }

    return (
        <div>
            <DocumentTitle title={(props.username || "Loading...") + " - SoundMix"}/>
            <div className="container-fluid">
                <img className="coverPhoto" src={coverImage} alt={props.username}/>
            </div>
            <div className="row detailPane">
                <div className="col s12 card valign-wrapper">
                    <div className="card-content valign-wrapper">
                        <div className="col s12 m4 valign-wrapper">
                            <img className="userPhoto" src={props.pictures.large} alt={props.username} />
                        </div>

                        <div className="col s12 m6">
                            <span className="card-title">{props.name}</span>


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

                            <div className="justify">
                                <p className="bio-text">{props.biog || "No Bio Added."}</p>
                                {(() => {
                                    if (props.city !== undefined) {
                                        return <p>HomeTown: {props.city}</p>
                                    }
                                })()}
                                <p>Country: {props.country}</p>
                                <p>
                                    Created: <Moment fromNow>{props.created_time}</Moment>
                                </p>

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