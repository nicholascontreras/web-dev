import Comment from "./Comment";

const CommentList = ({comments}) => {
    return (
        <div>
            {
                comments.map((curComment) => {
                    return (<Comment key={curComment["_id"]} comment={curComment}/>);
                })
            }
        </div>
    );
};

export default CommentList;