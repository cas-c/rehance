const express = require('express');
const fetch = require('snekfetch');
const token = require('./config').token;

const port = '3737';
const api = 'https://api.behance.net/v2/users/';
const searchApi = 'https://api.behance.net/v2/users?q=';
const client_id_string = `client_id=${token}`;

const app = express();

const catchAsync = fn => (req, res, next) => {
    const routePromise = fn(req, res, next);
    if (routePromise.catch) {
        routePromise.catch(err => next(err));
    }
};

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.get('/user/followers', catchAsync(async (req, res) => {
    const followers = await fetch.get(api + req.query.username + '/followers?' + client_id_string);
    res.json(followers.body.followers);
}));

app.get('/user/following', catchAsync(async (req, res) => {
    const following = await fetch.get(api + req.query.username + '/following?' + client_id_string);
    res.json(following.body.following);
}));

app.get('/user/stats', catchAsync(async (req, res) => {
    const stats = await fetch.get(api + req.query.username + '/stats?' + client_id_string);
    res.json(stats.body.stats.all_time);
}));

app.get('/user/projects', catchAsync(async (req, res) => {
    const projects = await fetch.get(api + req.query.username + '/projects?' + client_id_string);
    res.json(projects.body.projects);
}));

app.get('/user/workExperience', catchAsync(async (req, res) => {
    const workExperience = await fetch.get(api + req.query.username + '/work_experience?' + client_id_string);
    res.json(workExperience.body.work_experience);
}));

app.get('/user/search', catchAsync(async (req, res) => {
    const results = await fetch.get(searchApi + req.query.term + '&' + client_id_string);
    res.json(results.body.users);
}))

app.listen(port, () => {
    console.log('API running on', port);
})