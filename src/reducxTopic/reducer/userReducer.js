//reducer
export const userReducer = (state = false,action) => {
    switch (action.type) {
        case "USER_LOGGED":
            return !state;
        default:
            return state;

    }
}