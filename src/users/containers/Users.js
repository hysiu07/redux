import { connect } from 'react-redux';
import UsersList from '../components/UsersList';
import { fetchRequested } from '../redux';

function UsersContainer({ users, isLoading, isError, setUsers }) {
	return (
		<div className='container'>
			{isLoading && <p>Loading...</p>}
			<h2>Users</h2>
			<button onClick={setUsers}>Fetch Users</button>
			<UsersList users={users} />
		</div>
	);
}
const mapStateToProps = (state) => ({
	users: state.users.users,
	isError: state.users.isError,
	isLoading: state.users.isLoading,
});
const mapDispatchToProps = (dispatch) => ({
	setUsers: () => {
		dispatch(fetchRequested());
	},
});
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
