import { combineReducers } from 'redux';
import amountReducer from './amount/redux';
import reducer from './counter/redux';
import reducerPosts from './posts/redux';

export const rootReducers = combineReducers({
	counter: reducer,
	amount: amountReducer,
	posts: reducerPosts,
});
