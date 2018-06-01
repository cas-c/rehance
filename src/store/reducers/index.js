import { combineReducers } from 'redux';

import background from './background';
import followers from './followers';
import following from './following';
import projects from './projects';
import results from './results';
import stats from './stats';
import user from './user';
import workExperience from './workExperience';

export default combineReducers({
    background,
    followers,
    following,
    projects,
    results,
    stats,
    user,
    workExperience
});
