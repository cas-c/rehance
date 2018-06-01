export default (state = {}, action) => {
    if (action.type === 'SET_STATS') {
        return action.stats;
    }
    return state;
}