//import { combineReducers } from 'redux';
import {
  COLOR_COMPONENT_RANDOMIZE,
	COLOR_COMPONENT_CHANGE
} from '../actions';

export default (state, action) => {
	//console.log(action);
  switch (action.type) {
		case COLOR_COMPONENT_RANDOMIZE:
			return {
				...state,
				[action.colorComponent]: action.value
			};
		case COLOR_COMPONENT_CHANGE:
			return {
				...state,
				[action.colorComponent]: action.value
			};
		default:
	  	return state;
  }
}