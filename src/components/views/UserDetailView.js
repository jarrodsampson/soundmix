import React from 'react';
import DocumentTitle from 'react-document-title';
import {Button, Icon} from 'react-materialize';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import { NavLink } from 'react-router-dom';

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
               <p>
                  Created:
                  <Moment fromNow>{props.created_time}</Moment>
               </p>
               <div className="counts">
                  <div className="">
                     <p>
                        <Icon>message</Icon>
                        <span>{props.cloudcast_count}</span>
                     </p>
                  </div>
                  <div className="">
                     <p>
                        <Icon>visibility</Icon>
                        <span>{props.listen_count}</span>
                     </p>
                  </div>
                  <div className="">
                     <p>
                        <Icon>star</Icon>
                        <span>{props.favorite_count}</span>
                     </p>
                  </div>
                  <div className="">
                     <p>
                        <Icon>perm_identity</Icon>
                        <span>{props.following_count}</span>
                     </p>
                  </div>
                  <div className="">
                     <p>
                        <Icon>repeat</Icon>
                        <span>{props.follower_count}</span>
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
      <div className="row">
         <h4>Playlists</h4>
         <div className="row">
            {props.playlists.map((listener, i) => {
            return (
            <div key={i} className="card hoverable col s12 m4 l4">
               <div className="card-image">
                  <img src={listener.pictures.large} />
                  <span className="card-title">{listener.name}</span>
               </div>
               <div className="card-content">
                  <p>
                     Listened:
                     <Moment fromNow>{listener.listen_time}</Moment>
                  </p>
               </div>
            </div>
            );
            })}
         </div>
      </div>
      <div className="row">
         <h4>Feed</h4>
         <div className="row">
            {props.feed.map((item, i) => {
            return (
            <div key={i} className="card hoverable col s12 m6 l4">
               <div className="card-content">
                  <span className="card-title">{item.from.username} {item.title}
                  {(() => {
                  switch (item.type) {
                  case "follow":
                  return item.users.map((user, i) => {
                  return <span className="card-title" key={i}>{user.username}</span>
                  })
                  case "upload":
                  case "favorite":
                  return item.cloudcasts.map((cast, i) => {
                  return <span className="card-title" key={i}>{cast.name}</span>
                  })
                  default:      return "";
                  }
                  })()}
                  </span>
                  <p>
                     <Moment fromNow>{item.created_time}</Moment>
                  </p>
               </div>
            </div>
            );
            })}
         </div>
      </div>
      <div className="row">
               <h4>CloudCasts</h4>
               <div className="row">
                  {props.cloudcasts.map((item, i) => {
                  return (
                  <div key={i} className="col s12 m12 l12">
                                                      <div className="hotBox">
                                                          <div className="col s12 card hoverable hotBoxContainer">

                                                              <div className="card-content">

                                                                  <div className="col s12 m6 l3">
                                                                      <div className="imageContain">
                                                                          <img className="mainImage" src={item.pictures.large} alt={item.name} />
                                                                      </div>
                                                                  </div>
                                                                  <div className="col s12 m6 l9">

                                                                      <div className="counts">
                                                                          <div className="">
                                                                              <p><Icon>message</Icon><span>{item.comment_count}</span></p>
                                                                          </div>
                                                                          <div className="">
                                                                              <p><Icon>visibility</Icon><span>{item.play_count}</span></p>
                                                                          </div>
                                                                          <div className="">
                                                                              <p><Icon>star</Icon><span>{item.favorite_count}</span></p>
                                                                          </div>
                                                                          <div className="">
                                                                              <p><Icon>perm_identity</Icon><span>{item.listener_count}</span></p>
                                                                          </div>
                                                                          <div className="">
                                                                              <p><Icon>repeat</Icon><span>{item.repost_count}</span></p>
                                                                          </div>
                                                                      </div>

                                                                      <div className="postedTime"><Moment fromNow>{item.created_time}</Moment></div>

                                                                      <h4 className="title">
                                                                          <NavLink to={"/mix" + item.key} onClick={props.onClickAlbum}>
                                                                              <Truncate lines={2} ellipsis={<span>...</span>}>
                                                                                  {item.name}
                                                                              </Truncate>
                                                                          </NavLink>
                                                                      </h4>

                                                                      <div className="user valign-wrapper">
                                                                          <div className="col s12 m6 l6">
                                                                              <NavLink to={"/user/" + item.user.username}>
                                                                                  <img src={item.user.pictures.thumbnail} alt={item.user.name} />
                                                                              </NavLink>
                                                                          </div>
                                                                          <div className="col s12 m6 l6">
                                                                              <NavLink to={"/user/" + item.user.username}>
                                                                                  <p>{item.user.name}</p>
                                                                              </NavLink>
                                                                          </div>
                                                                      </div>

                                                                      <div className="tags">
                                                                          {item.tags.map(function(tag, i) {
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
</div>
);
}