const fetch = require('node-fetch');
 
fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));
 
fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => console.log(json));

console.log('harkback');