export default (state = '', action) => {
    if (action.type === 'SET_BACKGROUND') {
        return action.bg;
    }
    return state;
}