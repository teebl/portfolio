import { combineReducers } from 'redux';
import profiles from './profiles';

//redundant, but in place in case I want to make some additions in the future
const rootReducer = combineReducers({profiles});

export default rootReducer