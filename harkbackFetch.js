const fetch = require('node-fetch');

const checkOkResponse = res => res.ok ? res : Promise.reject({status: res.status})
const getJson = res => res.json();
const logJson = json => console.log(json);
const logErrorStatus = err => console.error(err.status);

const harkbackFetch = (url, options = {}) => (success = logJson, error = logErrorStatus) =>
    fetch(url, options)
        .then(checkOkResponse)
        .then(getJson)
        .then(success)
        .catch(error);
        
module.exports = harkbackFetch;