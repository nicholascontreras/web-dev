import React, {useState} from "react";
import {useDispatch} from "react-redux";

import {createTuit} from "../../../actions/tuits-actions";

import "../css/index.css";

const WhatsHappening = () => {
    const dispatch = useDispatch();
    const [newTuit, setNewTuit] = useState({tuit: '', postedBy: {username: 'Joe'}, handle: 'joe', 'avatar-image': '../../../images/bear.png', liked: false, stats: {comments: 0, retuits: 0, likes: 0}});

    return (
        <div style={{marginBottom: "1em"}}>
            <form>
                <textarea value={newTuit.tuit}
                          placeholder="What's happening?"
                          onChange={(e) =>
                              setNewTuit({
                                  ...newTuit,
                                  tuit: e.target.value}
                              )}
                          className="form-control bg-transparent border-1"
                          style={{color: "#fff"}}>
                </textarea>
                <div className="d-flex" style={{justifyContent: "flex-end"}}>
                    <button type="button" onClick={() =>
                            createTuit(dispatch, newTuit)}
                            className="btn btn-primary form-control rounded-pill mt-2" style={{width: "auto"}}>
                        Tuit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default WhatsHappening;