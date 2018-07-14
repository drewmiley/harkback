const fetch = require('node-fetch');

const checkOkResponse = res => res.ok ? res : Promise.reject({status: res.status})
const getJson = res => res.json();
const logJson = json => console.log(json);
const logErrorStatus = err => console.error(err.status);

const callbackFetch = url => {
    return fetch(url)
        .then(checkOkResponse)
        .then(getJson)
        .catch(logErrorStatus);
}
 
callbackFetch('https://randomuser.me/api/').then(logJson);
    
callbackFetch('https://httpstat.us/500').then(logJson);

console.log('harkback');