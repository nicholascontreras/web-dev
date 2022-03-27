import {useDispatch} from "react-redux";
import React from "react";

const TuitStats = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuit = () => {
        dispatch({type: 'like-tuit', tuit});
    };
    return (
        <div className="d-flex" style={{justifyContent: "space-between"}}>
            <span><i className="fa-solid fa-comment"></i> {tuit.stats.comments}</span>
            <span><i className="fa-solid fa-retweet"></i> {tuit.stats.retuits}</span>
            <span onClick={likeTuit}>
                {
                    tuit.liked &&
                    <i className="fa-solid fa-heart"
                       style={{color: 'red'}}></i>
                }
                {
                    !tuit.liked &&
                    <i className="fa-solid fa-heart"></i>
                }
                &nbsp;{tuit.stats && tuit.stats.likes}
            </span>
            <i className="fa-solid fa-share-from-square"></i>
            <span></span>
        </div>
    );
}
export default TuitStats;