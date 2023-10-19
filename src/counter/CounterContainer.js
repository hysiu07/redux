import { connect } from 'react-redux';
import { inc } from './redux';

function CounterContainer({ counterValue, addCount }) {
	
	return (
		<div className='container'>
			<h2>Counter: {counterValue} </h2>
			<button onClick={addCount}>Add</button>
		</div>
	);
}
function mapStateToProps(state) {
	return {
		counterValue: state.counter.count,
	};
}
function mapDispatchToProps(dispatch) {
	return {
		addCount: () => dispatch(inc()),
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

// function CounterContainerFunction({ counterFunction, addCounterFunction }) {
// 	return (
// 		<div className='container'>
// 			<h2>Counter: {counterFunction} </h2>
// 			<button onClick={addCounterFunction}>Add</button>
// 		</div>
// 	);
// }

// export default connect(counterFunction,addCounterFunction)(CounterContainerFunction)
