import axios from "axios";


const URL_BASE = "http://localhost:4000/api/comments/";

const createNewComment = async (newComment) => {
    const response = await axios.post(URL_BASE, newComment);
    return response.data;
};

const getCommentsOnBlueprint = async (blueprintKey) => {
    const response = await axios.get(URL_BASE + blueprintKey);
    return response.data;
};

const getCommentsByUser = async (userId) => {
    const response = await axios.get(URL_BASE + "user/" + userId);
    return response.data;
};

const CommentsService = {createNewComment, getCommentsOnBlueprint, getCommentsByUser};
export default CommentsService;