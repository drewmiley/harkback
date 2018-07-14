const fetch = require('node-fetch');

const checkOkResponse = res => res.ok ? res : Promise.reject({status: res.status})
const getJson = res => res.json();
const logJson = json => console.log(json);
const logErrorStatus = err => console.error(err.status);

const harkbackFetch = (url, options = {}) => {
    return fetch(url, options)
        .then(checkOkResponse)
        .then(getJson)
        .then(logJson)
        .catch(logErrorStatus);
}
 
harkbackFetch('https://randomuser.me/api/');
    
harkbackFetch('https://httpstat.us/500');

console.log('harkback');