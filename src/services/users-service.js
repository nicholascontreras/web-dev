import axios from "axios";

const URL_BASE = "http://localhost:4000/api/users/";

export const registerUser = async (newUser) => {
    const response = await axios.post(URL_BASE + "register", newUser);
    return mapUserResponse(response.data);
};

export const loginUser = async (user) => {
    const response = await axios.post(URL_BASE + "login", user);
    return mapUserResponse(response.data);
};

export const logoutUser = async () => {
    await axios.post(URL_BASE + "logout");
};

export const getUserProfile = async (user_id) => {
    const response = await axios.get(URL_BASE + "profile/" + user_id);
    return response.data;
};

const mapUserResponse = (user) => {
    return {
        username: user["username"],
        _id: user["_id"]
    }
}

export const followUser = async (followerId, followedId) => {
    await axios.get(URL_BASE + "follow/" + followerId + "/" + followedId);
}

export const unfollowUser = async (followerId, followedId) => {
    await axios.get(URL_BASE + "unfollow/" + followerId + "/" + followedId);
};

