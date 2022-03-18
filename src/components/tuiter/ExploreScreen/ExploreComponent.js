import React from "react";

import PostSummaryList from "../PostSummaryList";

const ExploreComponent = () => {
    return (
        <>
            <form>
                <div className="form-group d-flex mb-2">
                    <div className="icon-inside-input-container flex-grow-1">
                        <input type="text" className="form-control rounded-pill" placeholder="Search Tuiter"/>
                        <i className="fa-solid fa-magnifying-glass text-secondary"></i>
                    </div>
    
                    <i className="fa-solid fa-gear settings-button my-auto ms-3 text-primary"></i>
                </div>
            </form>
    
            <ul className="nav nav-tabs mb-1">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link d-none d-md-block" href="entertainment.html">Entertainment</a>
                </li>
            </ul>
            
            <div className="on-image-caption-container">
                <img src="../../../images/starship.jpg" className="img-fluid" alt=""/>
                <span className="fs-3 ms-2"><b>SpaceX's Starship</b></span>
            </div>
    
            <PostSummaryList/>
        </>
    );
}
export default ExploreComponent;