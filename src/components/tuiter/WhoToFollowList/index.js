import React from "react";

import WhoToFollowListItem from "./WhoToFollowListItem";
import {useSelector} from "react-redux";

const WhoToFollowList = () => {
    const who = useSelector(state => state.who);
    return (
        <ul className="list-group">
            <li className="list-group-item">
                <b>Who to follow</b>
            </li>
            {
                 who.map(who => {
                     return(
                         <WhoToFollowListItem who={who}/>
                     );
                 })
             }
        </ul>
    );
}
export default WhoToFollowList;