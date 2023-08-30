import { Route, Routes, Navigate } from "react-router-dom"
import "./App.css"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import NotFoundPage from "./components/NotFoundPage"
import { routes } from "./constants"
import LoginPage from "./components/LoginPage"

function App() {
	return (
		<>
			<Routes>
				<Route path={routes.main} element={<Navigate to={routes.home} />} />
				<Route path={routes.home} element={<HomePage />} />
				<Route path={routes.about} element={<AboutPage />} />
				<Route path={routes.login} element={<LoginPage />} />
				<Route path={routes.others} element={<Navigate to={routes.notFound} />} />
				<Route path={routes.notFound} element={<NotFoundPage />} />
			</Routes>
		</>
	)
}

export default App
