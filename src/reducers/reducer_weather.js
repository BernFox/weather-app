import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action){
	switch(action.type){
	case FETCH_WEATHER:
		return [action.payload.data, ...state] // ... syntax flattens list places items in new list.
	}
	return state;
}