const harkbackFetch = require('./harkbackFetch');
const myEmitter = require('./myEmitter');

const FETCH_SUCCESS = 'success';
const FETCH_FAILURE = 'failure';
const ADD_TO_NUMBER = 'add';

let myNumber = 1;

const successFetch = harkbackFetch('https://randomuser.me/api/');
const errorFetch = harkbackFetch('https://httpstat.us/500');

const addToNumberResult = number => () => {
    number++;
    console.log(number);
}
const events = [
    { name: FETCH_SUCCESS, result: res => console.log(`JsonResponse UserEmail: ${ res.results[0].email }`) },
    { name: FETCH_FAILURE, result: err => console.log(`Error status code: ${ err.status }`) },
    { name: ADD_TO_NUMBER, result: addToNumberResult(myNumber) }
];
myEmitter.setEventEmitters(events);

const successCallback = res => myEmitter.emit(FETCH_SUCCESS, res);
const failureCallback = err => myEmitter.emit(FETCH_FAILURE, err);

successFetch(successCallback, failureCallback);
errorFetch(successCallback, failureCallback);

const addToNumberCallback = () => myEmitter.emit(ADD_TO_NUMBER);

successFetch(addToNumberCallback, null);
errorFetch(null, addToNumberCallback);