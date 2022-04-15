import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import TuitListItem from "./TuitListItem";
import {findAllTuits} from "../../../actions/tuits-actions";

const TuitList = () => {
    const tuits = useSelector(state => state.tuits);
    const dispatch = useDispatch();
    useEffect(() => {
        console.log(tuits);
        findAllTuits(dispatch);
    }, []);

    return (
        <>
            <ul className="ttr-tuits list-group">
                {
                    tuits.map && tuits.map(tuit =>
                        <TuitListItem key={tuit._id}
                                      tuit={tuit}/>)
                }
            </ul>
        </>
    );
}

export default TuitList;