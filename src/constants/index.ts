export const routes = Object.freeze({
	main: "/",
	home: "/home",
	about: "/about",
	notFound: "/*",
}) 

export type RoutesKeys = typeof routes[keyof typeof routes];