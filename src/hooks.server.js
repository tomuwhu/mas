export async function handle({ event, resolve }) {
    event.locals.liggedIn = event.cookies.get('loggedIn')
	event.locals.user = event.cookies.get('user')
    event.locals.user_name = event.cookies.get('user_name')
    return resolve(event);
}