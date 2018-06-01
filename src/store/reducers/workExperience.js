export default (state = [], action) => {
    if (action.type === 'SET_WORK_EXPERIENCE') {
        return action.workExperience;
    }
    return state;
};