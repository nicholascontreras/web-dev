import React from "react"
import {Link} from "react-router-dom";

const Blueprint = ({blueprint}) => {
    return (
        <div className="col-3 pr-1 pl-1 pt-1 pb-1">
            <div className="card h-100">
                <div className="square-image-container">
                    <img className="card-img-top" src={blueprint["imageURL"]} alt={"Blueprint preview"}/>
                </div>
                <div className="card-body">
                    <h5 className="card-title line-clamp mb-0">{blueprint["name"]}</h5>
                </div>
                <div className="card-footer">
                    <Link to={"/blueprint/" + blueprint["key"]} className="btn btn-primary mt-auto">View Blueprint</Link>
                </div>
            </div>
        </div>
    );
};

export default Blueprint;