import { useState } from 'react';
import { connect } from 'react-redux';
import { add, sub, reset } from './redux';

function AmountContainer({ countAmount, addAmount, subAmount, resetAmount }) {

	return (
		<div className='container'>
			<h2>Amount: {countAmount} </h2>
			<button
				onClick={() => {
					addAmount();
				}}
			>
				Add
			</button>
			<button
				onClick={() => {
					subAmount();
				}}
			>
				Sub
			</button>
			<button
				onClick={() => {
					resetAmount();
				}}
			>
				Reset
			</button>
		</div>
	);
}
const mapStateToProps = (state) => {
	return {
		countAmount: state.amount.amount,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		addAmount: () => dispatch(add()),
		subAmount: () => dispatch(sub()),
		resetAmount: () => dispatch(reset()),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(AmountContainer);
