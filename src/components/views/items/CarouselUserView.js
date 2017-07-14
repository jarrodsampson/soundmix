import React from 'react';
import Moment from 'react-moment';
import OwlCarousel from 'react-owl-carousel';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <OwlCarousel
            items={6}
            autoplaySpeed={300}
            lazyLoad={true}
            rewind={true}
            navText={['<i class="material-icons">skip_previous</i>','<i class="material-icons">skip_next</i>']}
            nav
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
                            <div className="item card hoverable carouselCard">
                                <div className="card-image">
                                    <img src={item.pictures.large} alt={item.name}/>
                                    <span className="card-title">{item.name}</span>
                                    <a href={"/user/" + item.username}
                                             className="btn-floating halfway-fab waves-effect waves-light deep-purple darken-1"><i
                                        className="material-icons">info</i></a>
                                </div>
                                <div className="card-content">
                                    {(() => {
                                        if (item.listen_time !== undefined) {
                                            return <p>Listened <Moment fromNow>{item.listen_time}</Moment></p>
                                        } else {
                                            return <p>
                                                        <a href={"/user/" + item.username}> {item.username} </a>
                                                    </p>
                                        }
                                    })()}
                                </div>
                            </div>
                        </div>
                    );

                })}

        </OwlCarousel>
    );
}