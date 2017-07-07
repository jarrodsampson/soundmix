import React, { Component } from 'react';

class Loader extends Component {
    componentDidUpdate(prevProps) {}

    render() {
        return (
            <div className="dataLoader">
                <div className="loader preloader-wrapper big active">
                    <div className="spinner-layer spinner-red-only">
                        <div className="circle-clipper left">
                            <div className="circle"></div>
                        </div><div className="gap-patch">
                        <div className="circle"></div>
                    </div><div className="circle-clipper right">
                        <div className="circle"></div>
                    </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Loader
