const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

myEmitter.setEventEmitters = events => {
    events.map(event => myEmitter.on(event.name, event.result));
};

module.exports = myEmitter;