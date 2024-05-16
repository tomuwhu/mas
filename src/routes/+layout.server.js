export function load({ cookies }) {
	return {
		user: cookies.get('user'),
		user_name: cookies.get('user_name'),
		loggedIn: cookies.get('loggedIn')
	}
}