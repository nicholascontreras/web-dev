import {useParams} from "react-router-dom";
import BlueprintsService from "../../services/blueprints-service";
import {useEffect, useState} from "react";
import ReactMarkdown from "react-markdown";
import CommentList from "../CommentList";
import CommentsService from "../../services/comments-service";
import {useSelector} from "react-redux";

const Blueprint = () => {
    const {blueprint_key} = useParams();
    const [blueprintDetails, setBlueprintDetails] = useState({});
    useEffect((prevState) => {
        (async () => setBlueprintDetails({
            ...prevState,
            ...await BlueprintsService.getBlueprintDetails(blueprint_key),
            "comments": await CommentsService.getCommentsOnBlueprint(blueprint_key)
        }))();
    }, [blueprint_key]);

    const loggedIn = useSelector((state) => state);

    const attemptSubmitComment = () => {
        if (!blueprintDetails["new_comment_text"]) {
            return;
        }

        CommentsService.createNewComment({
            blueprintKey: blueprint_key,
            user: loggedIn,
            text: blueprintDetails["new_comment_text"]
        }).then((result) => {
            console.log(result);
            setBlueprintDetails({
                ...blueprintDetails,
                "comments": [...blueprintDetails["comments"], result],
                "new_comment_text": ""
            });

        });
    };

    return(
        <>
            <div className="row">
                <div className="col">
                    <h1>{blueprintDetails["name"]}</h1>
                </div>
            </div>

            <div className="row">
                <div className="col-6">
                    <div className="card">
                        <div className="card-body">
                            <ReactMarkdown>{blueprintDetails["description"]}</ReactMarkdown>
                        </div>
                    </div>
                </div>
                <div className="col-6">
                    <img src={blueprintDetails["imageURL"]} className="img-fluid image-thumbnail" alt="Blueprint"/>

                    {blueprintDetails["comments"] &&
                        <div className="card mt-2">
                            <div className="card-header">
                                <h4>Comments ({blueprintDetails["comments"].length})</h4>
                                <hr/>
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="new-comment-textarea">Leave a comment:</label>
                                        <textarea id="new-comment-textarea" className="form-control" value={blueprintDetails["new_comment_text"]} onChange={
                                            (event) =>
                                                setBlueprintDetails({
                                                    ...blueprintDetails,
                                                    "new_comment_text": event.target.value
                                                })
                                        } disabled={!loggedIn} placeholder={loggedIn ? "Comment" : "Login to leave a comment"}/>
                                        <button className="btn btn-primary mt-1" type="button"
                                                onClick={attemptSubmitComment} disabled={!loggedIn}>Comment
                                        </button>
                                    </div>
                                </form>
                            </div>
                            <div className="card-body">
                                {blueprintDetails["comments"].length > 0 &&
                                    <CommentList comments={blueprintDetails["comments"]}/>}
                                {blueprintDetails["comments"].length === 0 && (
                                    <p className="text-center mb-0">No comments</p>)}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Blueprint;