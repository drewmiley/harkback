const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log('an event occurred!');
});
myEmitter.emit('event');

const harkbackFetch = require('./harkbackFetch');

const successFetch = harkbackFetch('https://randomuser.me/api/');
const errorFetch = harkbackFetch('https://httpstat.us/500');

successFetch();
errorFetch();