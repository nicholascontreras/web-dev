export const CREATE_SESSION = "create_session";
export const CLEAR_SESSION = "clear_session";

export const createSession = (user) => {
    return {
        type: CREATE_SESSION,
        ...user
    };
};

export const clearSession = () => {
    return {
        type: CLEAR_SESSION
    }
};