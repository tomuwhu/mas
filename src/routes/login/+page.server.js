export const actions = {
	default: async ({ request, cookies }) => {
		let data = await request.formData()
        if (data.get('mail') === 'tomuwhu@gmail.com' && data.get('pw') === '1234') {
            cookies.set('loggedIn', 'true', { path: '/' })
            cookies.set('user', 'tomuwhu', { path: '/' })
            cookies.set('user_name', 'Dr. Németh Tamás', { path: '/' })
            return { success: true }
        } else {
            return { success: false }
        }
	}
}
export function load(event) {
    console.log(event.locals)
	return {
		user: event.locals.user
	}
}
