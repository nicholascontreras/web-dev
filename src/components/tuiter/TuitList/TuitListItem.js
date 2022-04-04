import React from "react";
import {useDispatch} from "react-redux";
import TuitStats from "./TuitStats";
import {deleteTuit} from "../../../actions/tuits-actions";

const TuitListItem = ({ tuit }) => {
    const dispatch = useDispatch();

    return (
        <div className="list-group">
            <div className="list-group-item d-flex">
                <img src={tuit["avatar-image"]} className="profile-img rounded-circle" alt=""/>
                <div className="flex-fill" style={{"margin-left" : "1em"}}>
                    <p className="mb-0">
                        <b>{tuit.postedBy.username}</b>
                        <span className="text-secondary">@{tuit.handle}</span>
                        {tuit.verified && <i className="fa-solid fa-circle-check "></i>}
                    </p>
                    <p className="mb-0">{tuit.tuit}</p>

                    {tuit.attachments && tuit.attachments.image && <img src={tuit.attachments.image} className="tuit-preview-image rounded-3" alt=""/>}
                    {tuit.attachments && tuit.attachments.video &&
                        <iframe src={"https://www.youtube.com/embed/" + tuit.attachments.video}
                                title="YouTube video player" frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                        </iframe>}

                    <TuitStats tuit={tuit}/>
                </div>
                <i className="fas fa-remove fa-2x fa-pull-right"
                   onClick={() => deleteTuit(dispatch, tuit)}></i>
            </div>
        </div>
    );
}
export default TuitListItem;