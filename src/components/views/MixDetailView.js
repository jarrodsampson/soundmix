import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button, Icon} from 'react-materialize';
import Moment from 'react-moment';
import {NavLink} from 'react-router-dom';
import Iframe from 'react-iframe'

import MixView from '../views/items/MixView';
import CarouselCommentView from '../views/items/CarouselCommentView';
import CarouselUserView from '../views/items/CarouselUserView';

// Using "Stateless Functional Components"
export default function (props) {
    console.log("https://api.mixcloud.com/" + props.user.username + "/" + props.slug + "/embed-html");
    return (
        <div className="">
            <DocumentTitle title={(props.name || "Loading...") + " - SoundMix"}/>


                <div className="row">
                    <Button className="buttonColor" onClick={props.goBack}>Back</Button>
                </div>

                <div className="container">
                    <div className="row itemHolder">
                        <div className="col s12 m12 l12">
                            <div className="hotBox">
                                <div className="col s12 card hoverable hotBoxContainer">

                                    <div className="card-content">

                                        <div className="col s12 m6 l4">
                                            <div className="imageContain">
                                                <img className="mainImage" src={props.pictures.large} alt={props.name}/>
                                            </div>
                                        </div>
                                        <div className="col s12 m6 l8 center-align">

                                            <div className="counts">
                                                <div className="">
                                                    <p><Icon>message</Icon><span>{props.comment_count}</span></p>
                                                </div>
                                                <div className="">
                                                    <p><Icon>visibility</Icon><span>{props.play_count}</span></p>
                                                </div>
                                                <div className="">
                                                    <p><Icon>star</Icon><span>{props.favorite_count}</span></p>
                                                </div>
                                                <div className="">
                                                    <p><Icon>perm_identity</Icon><span>{props.listener_count}</span></p>
                                                </div>
                                                <div className="">
                                                    <p><Icon>repeat</Icon><span>{props.repost_count}</span></p>
                                                </div>
                                            </div>

                                            <div className="postedTime"><Moment fromNow>{props.created_time}</Moment>
                                            </div>

                                            <h4 className="title">
                                                {props.name}
                                            </h4>

                                            <div className="user valign-wrapper">
                                                <div className="col s12 m6 l6">
                                                    <NavLink to={"/user/" + props.user.username}>
                                                        <img src={props.user.pictures.thumbnail} alt={props.user.name}/>
                                                    </NavLink>
                                                </div>
                                                <div className="col s12 m6 l6">
                                                    <NavLink to={"/user/" + props.user.username}>
                                                        <p>{props.user.name}</p>
                                                    </NavLink>
                                                </div>
                                            </div>

                                            <div className="tags">
                                                {props.tags.map(function (tag, i) {
                                                    return <div className="chip" key={i}>
                                                        <NavLink to={"/tag/" + (tag.name).replace(/ /g, "+")}
                                                                 onClick={props.onClickTag}>
                                                            {tag.name}
                                                        </NavLink>
                                                    </div>;
                                                })}
                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col s12">
                                <p>{props.description || "No Description Added."}</p>
                                <p>
                                    <Iframe
                                        url={"https://api.mixcloud.com/" + props.user.username + "/" + props.slug + "/embed-html"}
                                        width="100%"
                                        display="initial"
                                        position="relative"
                                        allowFullScreen/>
                                </p>
                                <p>
                                    <a href={props.url} target="_blank">Visit</a>
                                </p>
                            </div>
                        </div>


                    </div>
                </div>

                <div className="row">
                    <h4 className="headers">Recent Listeners</h4>
                    <div className="row">
                        <CarouselUserView list={props.listeners} />
                        {(() => {
                            if (props.listeners.length === 0) {
                                return <p>No Recent Listeners Found.</p>
                            }
                        })()}
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <h4>Suggested For You</h4>
                        <div className="row">
                            <MixView mixList={props.suggestions} />
                            {(() => {
                                if (props.suggestions.length === 0) {
                                    return <p>No Suggestions Found.</p>
                                }
                            })()}
                        </div>
                    </div>
                </div>

                <div className="row">
                     <h4 className="headers">Comments</h4>
                     <div className="row">
                          <CarouselCommentView commentList={props.comments} />
                         {(() => {
                             if (props.comments.length === 0) {
                                 return <p>No Comments Found.</p>
                             }
                         })()}
                     </div>
                </div>

                <div className="row">
                    <h4 className="headers">Recent Likes</h4>
                    <div className="row">
                        <CarouselUserView list={props.favorites} />
                        {(() => {
                            if (props.favorites.length === 0) {
                                return <p>No Likes Found.</p>
                            }
                        })()}
                    </div>
                </div>

        </div>
    );
}