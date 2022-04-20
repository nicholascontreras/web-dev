import React from "react";

const Blueprint = (blueprint_name, image_src) => {
    return (
        <div className="card">
            <img className={"card-img-top"} src={image_src} alt={"Blueprint preview image"}/>
            <div className="card-body">
                <h5 className="card-title">{blueprint_name}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the
                    card's content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
};

export default  Blueprint;