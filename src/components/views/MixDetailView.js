import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button, Icon} from 'react-materialize';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import { NavLink } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import Iframe from 'react-iframe'

// Using "Stateless Functional Components"
export default function(props) {
    console.log("https://api.mixcloud.com/" + props.user.username + "/" + props.slug + "/embed-html");
    return (
        <div className="">
            <DocumentTitle title={(props.name || "Loading...") + " - SoundMix"} />
            <div className="row">
                <Button className="red" onClick={props.goBack}>Back</Button>
            </div>

            <div className="container">
                <div className="row itemHolder">
                            <div className="col s12 m12 l12">
                                <div className="hotBox">
                                    <div className="col s12 card hoverable hotBoxContainer">

                                        <div className="card-content">

                                            <div className="col s12 m6 l3">
                                                <div className="imageContain">
                                                    <img className="mainImage" src={props.pictures.large} alt={props.name} />
                                                </div>
                                            </div>
                                            <div className="col s12 m6 l9">

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

                                                <div className="postedTime"><Moment fromNow>{props.created_time}</Moment></div>

                                                <h4 className="title">
                                                    {props.name}
                                                </h4>

                                                <div className="user valign-wrapper">
                                                    <div className="col s12 m6 l6">
                                                        <NavLink to={"/user/" + props.user.username}>
                                                            <img src={props.user.pictures.thumbnail} alt={props.user.name} />
                                                        </NavLink>
                                                    </div>
                                                    <div className="col s12 m6 l6">
                                                        <NavLink to={"/user/" + props.user.username}>
                                                            <p>{props.user.name}</p>
                                                        </NavLink>
                                                    </div>
                                                </div>

                                                <div className="tags">
                                                    {props.tags.map(function(tag, i) {
                                                        return <div className="chip" key={i}>
                                                            <NavLink to={"/tag/" + (tag.name).replace(/ /g, "+")} onClick={props.onClickTag}>
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
                                        <Iframe url={"https://api.mixcloud.com/" + props.user.username + "/" + props.slug + "/embed-html"}
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
                <h4>Recent Listeners</h4>
                <div className="row">
                    {props.listeners.map((listener, i) => {
                        return (
                                <div key={i} className="card hoverable col s12 m4 l4">
                                    <div className="card-image">
                                        <img src={listener.pictures.large} />
                                        <span className="card-title">{listener.name}</span>
                                        <NavLink to={"/user/" + listener.username} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></NavLink>
                                    </div>
                                    <div className="card-content">
                                        <p>Listened: <Moment fromNow>{listener.listen_time}</Moment></p>
                                    </div>
                                </div>
                        );
                    })}
                </div>
            </div>

            <div className="container">
                <div className="row">
                    <h4>Suggested For You</h4>
                    <div className="row">
                        {props.suggestions.map((suggestion, i) => {
                            return (
                                <div key={i} className="col s12 m12 l12">
                                    <div className="hotBox">
                                        <div className="col s12 card hoverable hotBoxContainer">

                                            <div className="card-content">

                                                <div className="col s12 m6 l3">
                                                    <div className="imageContain">
                                                        <img className="mainImage" src={suggestion.pictures.large} alt={suggestion.name} />
                                                    </div>
                                                </div>
                                                <div className="col s12 m6 l9">

                                                    <div className="counts">
                                                        <div className="">
                                                            <p><Icon>message</Icon><span>{suggestion.comment_count}</span></p>
                                                        </div>
                                                        <div className="">
                                                            <p><Icon>visibility</Icon><span>{suggestion.play_count}</span></p>
                                                        </div>
                                                        <div className="">
                                                            <p><Icon>star</Icon><span>{suggestion.favorite_count}</span></p>
                                                        </div>
                                                        <div className="">
                                                            <p><Icon>perm_identity</Icon><span>{suggestion.listener_count}</span></p>
                                                        </div>
                                                        <div className="">
                                                            <p><Icon>repeat</Icon><span>{suggestion.repost_count}</span></p>
                                                        </div>
                                                    </div>

                                                    <div className="postedTime"><Moment fromNow>{suggestion.created_time}</Moment></div>

                                                    <h4 className="title">
                                                        <NavLink to={"/mix" + suggestion.key} onClick={props.onClickAlbum}>
                                                            <Truncate lines={2} ellipsis={<span>...</span>}>
                                                                {suggestion.name}
                                                            </Truncate>
                                                        </NavLink>
                                                    </h4>

                                                    <div className="user valign-wrapper">
                                                        <div className="col s12 m6 l6">
                                                            <NavLink to={"/user/" + suggestion.user.username}>
                                                                <img src={suggestion.user.pictures.thumbnail} alt={suggestion.user.name} />
                                                            </NavLink>
                                                        </div>
                                                        <div className="col s12 m6 l6">
                                                            <NavLink to={"/user/" + suggestion.user.username}>
                                                                <p>{suggestion.user.name}</p>
                                                            </NavLink>
                                                        </div>
                                                    </div>

                                                    <div className="tags">
                                                        {suggestion.tags.map(function(tag, i) {
                                                            return <div className="chip" key={i}>
                                                                <NavLink to={"/tag/" + (tag.name).replace(/ /g, "+")} onClick={props.onClickTag}>
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
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="row">
                <h4>Recent Likes</h4>
                <div className="row">
                    <OwlCarousel
                        items={6}
                        autoplaySpeed={300}
                        lazyLoad={true}
                        rewind={true}
                        responsive={
                        {
                            "0":{items:1},
                            "600":{items:3},
                            "1000":{items:6}
                        }
                        }
                        autoplay={true}
                        autoplayHoverPause={true}>
                        {props.favorites.map((favoriteUser, i) => {
                            return (
                                <div key={i} className="item card hoverable">
                                    <div className="card-image">
                                        <img src={favoriteUser.pictures.large} />
                                        <span className="card-title">{favoriteUser.name}</span>
                                        <NavLink to={"/user/" + favoriteUser.username} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></NavLink>
                                    </div>
                                    <div className="card-content">
                                        <p>Listened: <Moment fromNow>{favoriteUser.listen_time}</Moment></p>
                                    </div>
                                </div>
                            );
                        })}
                    </OwlCarousel>
                </div>
            </div>


        </div>
    );
}