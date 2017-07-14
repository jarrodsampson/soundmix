import React from 'react';
import {NavLink} from 'react-router-dom';
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
            margin={0}
            navText={['<i class="material-icons">skip_previous</i>','<i class="material-icons">skip_next</i>']}
            nav
            responsive={
            {
                "0": {items: 1},
                "500": {items: 3},
                "1000": {items: 5}
            }
            }
            autoplay={true}
            autoplayHoverPause={true}>

            {props.list.map((item, i) => {
                return (
                    <div key={i} className="col s12">
                        <div className="item card hoverable carouselCard carouselCardMixAlbum">
                            <div className="card-image">
                                <NavLink to={"/mix" + item.key}>
                                    <img src={item.pictures.large} alt={item.name}/>
                                    <span className="card-title small">{item.name}</span>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                );

            })}

        </OwlCarousel>
    );
}