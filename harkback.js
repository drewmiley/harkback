const fetch = require('node-fetch');

const checkOkResponse = res => res.ok ? res : Promise.reject({status: res.status})
const getJson = res => res.json();
const logJson = json => console.log(json);
const logErrorStatus = err => console.error(err.status);

const harkbackFetch = (url, options = {}) => () =>
    fetch(url, options)
        .then(checkOkResponse)
        .then(getJson)
        .then(logJson)
        .catch(logErrorStatus);
    
const successFetch = harkbackFetch('https://randomuser.me/api/');

const errorFetch = harkbackFetch('https://httpstat.us/500');
 
successFetch();
    
errorFetch();

console.log('harkback');