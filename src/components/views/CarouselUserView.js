import React from 'react';
import Moment from 'react-moment';
import {NavLink} from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

// Using "Stateless Functional Components"
export default function (props) {
    console.log("Ps", props);
    return (
        <OwlCarousel
            items={6}
            autoplaySpeed={300}
            lazyLoad={true}
            rewind={true}
            responsive={
            {
                "0": {items: 1},
                "600": {items: 3},
                "1000": {items: 5}
            }
            }
            autoplay={true}
            autoplayHoverPause={true}>

                {props.list.map((item, i) => {
                    return (
                        <div key={i} className="col s12">
                            <div className="item card hoverable">
                                <div className="card-image">
                                    <img src={item.pictures.large} alt={item.name}/>
                                    <span className="card-title">{item.name}</span>
                                    <NavLink to={"/user/" + item.username}
                                             className="btn-floating halfway-fab waves-effect waves-light buttonColor"><i
                                        className="material-icons">add</i></NavLink>
                                </div>
                                <div className="card-content">
                                    <p>Listened <Moment fromNow>{item.listen_time}</Moment></p>
                                </div>
                            </div>
                        </div>
                    );

                })}

        </OwlCarousel>
    );
}