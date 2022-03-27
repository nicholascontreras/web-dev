import React, {useState} from "react";
import {useDispatch} from "react-redux";

import "../css/index.css";

const WhatsHappening = () => {
    let [whatsHappening, setWhatsHappening] = useState('');
    const dispatch = useDispatch();
    const tuitClickHandler = () => {
        dispatch({type: 'create-tuit',
            tuit: whatsHappening
        });
    }
    return (
        <div style={{marginBottom: "1em"}}>
            <form>
                <textarea value={whatsHappening}
                          placeholder="What's happening?"
                          onChange={(event) => setWhatsHappening(event.target.value)}
                          className="form-control bg-transparent border-1"
                          style={{color: "#fff"}}>
                </textarea>
                <div className="d-flex" style={{justifyContent: "flex-end"}}>
                    <button type="button" onClick={tuitClickHandler} className="btn btn-primary form-control rounded-pill mt-2" style={{width: "auto"}}>
                        Tuit
                    </button>
                </div>
            </form>
        </div>
    );
}
export default WhatsHappening;