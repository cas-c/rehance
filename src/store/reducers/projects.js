export default (state = [], action) => {
    if (action.type === 'SET_PROJECTS') {
        return action.projects;
    }
    return state;
}