const setAuthToken = (token, options) => {
    if (token) {
        options.Authorization = token;
    } else {
        delete options.Authorization;
    }
};

export default setAuthToken;