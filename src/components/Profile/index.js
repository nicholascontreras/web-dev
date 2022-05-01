import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {BlueprintsGrid} from "../BlueprintsGrid";
import CommentsService from "../../services/comments-service";
import * as UsersService from "../../services/users-service";
import {useEffect, useState} from "react";

const Profile = () => {
    let {userId} = useParams();

    const [state, setState] = useState({});
    useEffect(() => {
        (async () => {
            UsersService.getUserProfile(userId).then((profile) => {
                setState((prevState) => ({...prevState, "profile": profile}));
            });
            CommentsService.getCommentsByUser(userId).then((comments) => {
                const blueprintIds = comments.map((curComment) => curComment["blueprintKey"]);
                setState((prevState => ({...prevState, "blueprintIds": blueprintIds})));
            });
        })();
    }, [userId]);

    const loggedIn = useSelector((state) => state);
    if (!userId) {
        if (loggedIn) {
            userId = loggedIn["_id"];
        } else {
            return (<h4 className="text-center mt-5">Login to view your profile.</h4>);
        }
    }

    const attemptFollow = () => {
        UsersService.followUser(loggedIn["_id"], userId).then(() => {
            setState((prevState => ({
                ...prevState,
                "profile": {
                    ...prevState["profile"],
                    "following": [...prevState["profile"]["following"], userId]
                }
            })));
        });
    };

    const attemptUnfollow = () => {
        UsersService.unfollowUser(loggedIn["_id"], userId).then(() => {
            setState((prevState => ({
                ...prevState,
                "profile": {
                    ...prevState["profile"],
                    "following": prevState["profile"]["following"].filter(followed => followed !== userId)
                }
            })));
        });
    };

    return (
        <>
            {
                state["profile"] && state["blueprintIds"] &&
                <>
                    <h1 className="d-inline">{((loggedIn["_id"] === userId) ? "Your" : state["profile"]["username"] + "'s") + " Recently Commented Blueprints:"}</h1>
                    {
                        loggedIn && (!state["profile"]["following"].includes(userId)) && (loggedIn["_id"] !== userId) &&
                        <button className="btn btn-primary float-right" onClick={attemptFollow}>Follow {state["profile"]["username"]}</button>
                    }
                    {
                        loggedIn && (state["profile"]["following"].includes(userId)) &&
                        <button className="btn btn-danger float-right" onClick={attemptUnfollow}>Unfollow {state["profile"]["username"]}</button>
                    }

                    <BlueprintsGrid title="" blueprintKeys={state["blueprintIds"]}/>
                </>
            }
        </>
    );
};

export default Profile;