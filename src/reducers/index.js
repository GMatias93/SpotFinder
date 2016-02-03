import { combineReducers } from 'redux';
import EventReducer from './reducer_event';

const rootReducer = combineReducers({
  event: EventReducer,
});

export default rootReducer;
