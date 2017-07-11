import React from 'react';
import Moment from 'react-moment';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.userList.map((item, i) => {
                return (
                    <div key={i} className="col s12 m4 l4">
                        <div className="card hoverable">
                            <div className="card-image">
                                <img src={item.pictures.large} alt={item.username}/>
                                <span className="card-title">{item.name}</span>
                                <a href={"/user/" + item.username}
                                         className="btn-floating halfway-fab waves-effect waves-light buttonColor deep-purple darken-1"><i
                                    className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>Listened <Moment fromNow>{item.listen_time}</Moment></p>
                            </div>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}