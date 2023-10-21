import React from 'react';
import './styles.css';

import { Provider } from 'react-redux';

import CounterContainer from './counter/CounterContainer';
import AmountContainer from './amount/AmountContainer';
import Posts from './posts/containers/Posts';
import Users from './users/containers/Users';

import { PersistGate } from 'redux-persist/integration/react';

import { store, persistor } from './configureStoreP';

export default function App() {
	return (
		<div className='App'>
			<Provider store={store}>
				<PersistGate loading={null} persistor={persistor}>
					<AmountContainer />
					<CounterContainer />
					<Posts />
					<Users />
				</PersistGate>
			</Provider>
		</div>
	);
}
