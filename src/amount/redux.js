import { useState } from "react";

const AMOUNT_ADD = 'amount/ADD_AMOUNT';
const AMOUNT_SUB = 'amount/SUB_AMOUNT';
const AMOUNT_RESET = 'amount/RESET_AMOUNT';

export const add = () => ({ type: AMOUNT_ADD });
export const sub = () => ({ type: AMOUNT_SUB });
export const reset = () => ({ type: AMOUNT_RESET });

const INITIAL_STATE = {
	amount: 100,
};
// const [amount, setAmount] = useState(100)

export default function amountReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case AMOUNT_ADD:
			return { amount: state.amount + 100 };
		case AMOUNT_SUB:
			return { ...state, amount: state.amount - 100 };
		case AMOUNT_RESET:
			return { ...state, amount: 0 };
		default:
			return state;
	}

}
