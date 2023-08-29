import { useNavigate } from "react-router-dom"
import { RoutesKeys, routes } from "../constants"

const useNavigateTo = () => {
	const navigate = useNavigate()

	const navigateFunction = (link?: RoutesKeys) => {
		navigate(link ? link : `${routes.home}`)
	}
	return {
		navigateFunction,
	}
}

export { useNavigateTo }
