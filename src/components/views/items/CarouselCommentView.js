import React from 'react';
import Moment from 'react-moment';
import OwlCarousel from 'react-owl-carousel';
import Truncate from 'react-truncate';
// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <OwlCarousel
            items={6}
            autoplaySpeed={300}
            lazyLoad={true}
            rewind={true}
            responsive={
            {
                "0": {items: 1},
                "600": {items: 2},
                "1000": {items: 3}
            }
            }
            autoplay={true}
            autoplayHoverPause={true}>

            {props.commentList.map((item, i) => {
                return (
                    <div key={i} className="col s12 commentSlide">
                        <div className="item card hoverable">
                            <div className="card-content">
                                              <span className="card-title">"<Truncate lines={3} ellipsis={<span>...</span>}>
                                                                            {item.comment}
                                                                        </Truncate>" {item.user.username}

                                              </span>
                                <p>
                                    <Moment fromNow>{item.submit_date}</Moment>
                                </p>
                            </div>
                        </div>
                    </div>
                );

            })}

        </OwlCarousel>
    );
}