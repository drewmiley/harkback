const fetch = require('node-fetch');

const checkOkResponse = res => res.ok ? res : Promise.reject({status: res.status})
const getJson = res => res.json();
const logJson = json => console.log(json);
const logErrorStatus = err => console.error(err.status);
 
fetch('https://randomuser.me/api/')
    .then(checkOkResponse)
    .then(getJson)
    .then(logJson)
    .catch(logErrorStatus);
    
fetch('https://httpstat.us/500')
    .then(checkOkResponse)
    .then(getJson)
    .then(logJson)
    .catch(logErrorStatus);

console.log('harkback');