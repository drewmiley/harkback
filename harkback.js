const fetch = require('node-fetch');
 
fetch('https://randomuser.me/api/')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            return Promise.reject({status: response.status});
        }
    })
    .then(res => res.json())
    .then(json => {
        return console.log(json);
    })
    .catch(err => {
        console.error(err.status);
    });
    
fetch('https://httpstat.us/500')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            return Promise.reject({status: response.status});
        }
    })
    .then(res => res.json())
    .then(json => {
        return console.log(json);
    })
    .catch(err => {
        console.error(err.status);
    });

console.log('harkback');