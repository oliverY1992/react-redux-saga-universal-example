import 'isomorphic-fetch';

const callApi = (url, schema) => {
    return fetch(url)
        .then(response => response.json().then(json => ({response, json})))
        .then(({response, json}) => {
            if(!response.ok){
                return Promise.reject(json);
            }

        })
}

