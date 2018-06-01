// THis is where we should get all data from the api.

const api = 'http://localhost:3737/user/';

const getFollowers = username => fetch(api + 'followers?username=' + username);
const getFollowing = username => fetch(api + 'following?username=' + username);
const getProjects = username => fetch(api + 'projects?username=' + username);
const getStats = username => fetch(api + 'stats?username=' + username);
const getWorkExperience = username => fetch(api + 'workExperience?username=' + username);

export const getAllUserData = dispatch => async username => {
    const followers = await getFollowers(username);
    dispatch({ type: 'SET_FOLLOWERS', followers: await followers.json() });
    const following = await getFollowing(username);
    dispatch({ type: 'SET_FOLLOWING', following: await following.json() });
    const projects = await getProjects(username);
    dispatch({ type: 'SET_PROJECTS', projects: await projects.json() });
    const stats = await getStats(username);
    dispatch({ type: 'SET_STATS', stats: await stats.json() });
    const workExperience = await getWorkExperience(username);
    dispatch({ type: 'SET_WORK_EXPERIENCE', workExperience: await workExperience.json() });
}

export const search = async searchTerm => await (await fetch(api + 'search?term=' + searchTerm)).json();
