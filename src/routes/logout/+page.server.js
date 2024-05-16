export function load(event) {
    event.cookies.delete('user', { path: '/' });
    event.cookies.delete('user_name', { path: '/' });
    event.cookies.delete('loggedIn', { path: '/' });
    event.locals.user = null;
    return {user: false, loggedIn: false}
}
