const fetch = require('node-fetch');
 
fetch('https://github.com/')
    .then(res => res.text())
    .then(body => console.log(body));
 
fetch('https://api.github.com/users/github')
    .then(res => res.json())
    .then(json => console.log(json));
    
fetch('http://domain.invalid/')
    .catch(err => console.error(err));

console.log('harkback');