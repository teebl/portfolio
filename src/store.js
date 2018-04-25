import { createStore } from 'redux';

//import root reducer
import rootReducer from './reducers/index';


//import state
import data from './resources/data';


//clone data to default state

const defaultState = {...data};

console.log('defaultState incoming (store.js)');
console.dir(defaultState);



const store = createStore(rootReducer);

export default store;