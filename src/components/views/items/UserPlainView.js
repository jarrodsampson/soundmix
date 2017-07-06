import React from 'react';
import {NavLink} from 'react-router-dom';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.userList.map((item, i) => {
                return (
                    <div key={i} className="col s12 m3 l3 padding">
                        <div className="card hoverable plainCard">
                            <div className="card-image">
                                <img src={item.pictures.large} alt={item.username}/>

                                <NavLink to={"/user/" + item.username}
                                         className="btn-floating halfway-fab waves-effect waves-light buttonColor"><i
                                    className="material-icons">add</i></NavLink>
                            </div>
                            <div className="card-content">
                                <span className="card-title">{item.name}</span>
                            </div>
                        </div>
                    </div>
                );

            })}

        </div>
    );
}