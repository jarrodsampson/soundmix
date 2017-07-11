import React from 'react';
import OwlCarousel from 'react-owl-carousel';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (



        <OwlCarousel
            className="owl-theme"
            loop
            margin={0}
            autoplaySpeed={600}
            rewind={true}
            autoplay={true}
            autoplayHoverPause={true}
            items={1}
        >

            {props.list.map((item, i) => {
                return (
                    <div key={i} className="col s12">
                        <div className="item"><img src={item} alt="Item"/></div>
                    </div>
                );

            })}

        </OwlCarousel>
    );
}