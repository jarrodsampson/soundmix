import React from 'react';
import Moment from 'react-moment';
import Truncate from 'react-truncate';
import {Icon} from 'react-materialize';
import {NavLink} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.mixList.map((item, i) => {
                return (
                    <div key={i} className="col s12 m12 l12">
                        <div className="hotBox">
                            <div className="col s12 card hoverable hotBoxContainer">

                                <div className="card-content">

                                    <div className="col s12 m6 l4">
                                        <div className="imageContain">
                                            <img className="mainImage" src={item.pictures.large} alt={item.name} />
                                        </div>
                                    </div>
                                    <div className="col s12 m6 l8">

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
                                            <NavLink to={"/mix" + item.key}>
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
    );
}