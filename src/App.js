import React from 'react';
import './styles.css';

import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';


import { Provider } from 'react-redux';
import { rootReducers } from './rootReducer';

import CounterContainer from './counter/CounterContainer';
import AmountContainer from './amount/AmountContainer';
import Posts from './posts/containers/Posts';
import Users from './users/containers/Users';

const store = configureStore({
	reducer: rootReducers,

});

export default class App extends React.Component {
	render() {
		return (
			<div className='App'>
				<Provider store={store}>
					<AmountContainer />
					<CounterContainer />
					<Posts />
					<Users />
				</Provider>
			</div>
		);
	}
}
