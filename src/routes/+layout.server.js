export function load(event) {
    console.log(event.locals)
	return {
		user: event.locals.user
	}
}