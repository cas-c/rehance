export default (state = [], action) => {
    if (action.type === 'SET_FOLLOWERS') {
        return action.followers;
    }
    return state;
}