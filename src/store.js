import { createStore } from "redux";

//import root reducer
import rootReducer from "./reducers/index";

//import state
var data = require("./resources/data.json");

//clone data to default state

const defaultState = { ...data };

console.log("defaultState incoming (store.js)");
console.dir(defaultState);

const store = createStore(rootReducer);

export default store;
