import {createAction, createActions} from 'redux-actions';
const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILURE = 'FAILURE';

const createHttpTypes = base => {
    const res = {};
    [REQUEST, SUCCESS, FAILURE].forEach(type => {
        res[type] = `${base}_${type}`;
    });
    return res;
}
const httpActionCreators = base => {
    return createActions(`${base}_${REQUEST}`, `${base}_${SUCCESS}`, `${base}_${FAILURE}`);
};
const User = httpActionCreators('USER');
const Repo = httpActionCreators('REPO');
const Starred = httpActionCreators('STARRED');
const Stargazers = httpActionCreators('STARGAZERS');


/**
 *
 * @type {{request: ((p1:*)), success: ((p1:*, p2:*)), failure: ((p1:*, p2:*))}}
 */
export const user = {
    request:login => User['userRequest']({login}),
    success:(login, response) => User['userSuccess']({login, response}),
    failure:(login, error) => User['userFailure']({login, error})
};

export const repo = {
    request:fullName => Repo['repoRequest']({fullName}),
    success:(fullName, response) => Repo['repoSuccess']({fullName, response}),
    failure:(fullName, error) => Repo['repoFailure']({fullName, error})
};

export const starred = {
    request:login => Starred['starredRequest']({login}),
    success:(login, response) => Starred['starredSuccess']({login, response}),
    failure:(login, error) => Starred['starredFailure']({login, error})
};

export const stargazers = {
    request:fullName => Stargazers['stargazersRequest']({fullName}),
    success:(fullName, response) => Stargazers['stargazersSuccess'](fullName, response),
    failure:(fullName, error) => Stargazers['stargazers']({fullName, error})
};



