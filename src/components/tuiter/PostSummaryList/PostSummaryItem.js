import React from "react";

const PostSummaryItem = ({
                              post = {
                                  "topic": "Web Development",
                                  "userName": "ReactJS",
                                  "time": "2h",
                                  "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
                                  "image": "../../../images/react-blue.png"
                              }
                          }) => {
    return (
        <div className="list-group">
            <div className="list-group-item d-flex">
                <div className="flex-fill">
                    <p className="text-secondary mb-0">{post.topic}</p>
                    <p className="mb-0">
                        <b>{post.userName}</b>
                        <i className="fa-solid fa-circle-check "></i> -
                        <span className="text-secondary">{post.time}</span>
                    </p>
                    <p className="mb-0">{post.title}</p>
                </div>
    
                <img src={post.image} className="tuit-preview-image rounded-3" alt=""/>
            </div>
        </div>
    );
}
export default PostSummaryItem;