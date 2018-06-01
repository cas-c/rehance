export default (state = {}, action) => {
    if (action.type === 'SET_DISPLAY_USER') {
        return action.user;
    }
    return state;
}