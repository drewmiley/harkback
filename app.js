const harkbackFetch = require('./harkbackFetch');
const myEmitter = require('./myEmitter');

const successFetch = harkbackFetch('https://randomuser.me/api/');
const errorFetch = harkbackFetch('https://httpstat.us/500');
const events = [
    { name: 'event', result: text => console.log(`an event occurred!${ text }`)}
];
myEmitter.setEventEmitters(events);

successFetch();
errorFetch();
myEmitter.emit('event', 'this is my event text');