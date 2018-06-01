export default (state = [], action) => {
    if (action.type === 'SET_FOLLOWING') {
        return action.following;
    }
    return state;
}