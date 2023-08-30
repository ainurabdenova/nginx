export const routes = Object.freeze({
	main: "/",
	home: "/home",
	about: "/about",
	login: "/login",
	notFound: "/not-found",
	others: "/*",
})

export type RoutesKeys = (typeof routes)[keyof typeof routes]
