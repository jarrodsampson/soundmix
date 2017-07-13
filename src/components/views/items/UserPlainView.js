import React from 'react';

// Using "Stateless Functional Components"
export default function (props) {
    //console.log("Ps", props);
    return (
        <div className="row itemHolder">
            {props.userList.map((item, i) => {
                return (
                    <div key={i} className="col s12 m4 l3 padding">
                        <div className="card hoverable plainCard">
                            <div className="card-image">
                                <a href={"/user/" + item.username}>
                                    <img src={item.pictures.large} alt={item.username}/>
                                </a>
                                <a href={"/user/" + item.username}
                                         className="btn-floating halfway-fab waves-effect waves-light deep-purple darken-1"><i
                                    className="material-icons">add</i></a>
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