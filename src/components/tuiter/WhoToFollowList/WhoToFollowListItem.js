import React from "react";

const WhoToFollowListItem = ({
                                 who = {
                                     avatarIcon: '../../../images/nasa.png',
                                     userName: 'NASA',
                                     handle: 'NASA',
                                 }
                             }) => {
    return (
        <li className="list-group-item d-flex">
            <img src={who.avatarIcon} className="profile-img rounded-circle" alt=""/>
            <span className="flex-fill ms-3">
                <b>{who.userName}</b>
                <i className="fa-solid fa-circle-check "></i>
                <br/>
                <span>@{who.handle}</span>
            </span>
            <div className="badge bg-primary rounded-pill my-auto py-2">
                <span>Follow</span>
            </div>
        </li>
    );
}

export default WhoToFollowListItem;