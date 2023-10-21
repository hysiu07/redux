export const FETCH_USERS_REQUESTED = 'users/FETCH_USERS_REQUESTED';
export const FETCH_USERS_SUCCESED = 'users/FETCH_USERS_SUCCESED';
export const FETCH_USERS_FAILED = 'users/FETCH_USERS_FAILED';

const INITIAL_STATE = {
	users: [],
	isLoading: false,
	isError: false,
};


export const fetchRequested = () => ({ type: FETCH_USERS_REQUESTED });
export const fetchSucessed = (data) => ({ type: FETCH_USERS_SUCCESED, payload: data });
export const fetchFailed = () => ({ type: FETCH_USERS_FAILED });

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUESTED:
			return {
				...state,
				isLoading: true,
				isError: false,
			};
		case FETCH_USERS_SUCCESED:
			return {
				...state,
				users: action.payload,
				isLoading: false,
				isError: false,
			};
		case FETCH_USERS_FAILED:
			return {
				...state,
				isLoading: false,
				isError: true,
			};
		default:
			return state;
	}
};
