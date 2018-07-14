const harkbackFetch = require('./harkbackFetch');

const successFetch = harkbackFetch('https://randomuser.me/api/');
const errorFetch = harkbackFetch('https://httpstat.us/500');

successFetch();
errorFetch();