import {Link} from "react-router-dom";

const Comment = ({comment}) => {
    return(
        <div className="card">
            <div className="card-header">
                <h6><Link to={"/profile/" + comment["user"]["_id"]}>{comment["user"]["username"]}</Link></h6>
            </div>
            <div className="card-body">
                <p>{comment["text"]}</p>
            </div>
        </div>
    );
 };

export default Comment;