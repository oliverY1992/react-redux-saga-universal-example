import {take, put, call, fork, select} from 'redux-saga/effects';
import {schema, normalize} from 'normalizr';
import 'isomorphic-fetch';
import config from '../app.config';

const callApi = (endpoint, schema) => {
    let fullUrl = `${config.apiBaseUrl}/${endpoint}`;
    return fetch(fullUrl)
        .then(response => response.json())
        .then(json => {

        })
}

const User = new schema.Entity('user', {
    login:String
});
