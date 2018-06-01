export default (state = [], action) => {
    if (action.type === 'SET_RESULTS') {
        return action.results;
    }
    return state;
}