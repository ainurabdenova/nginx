import { Link } from "react-router-dom"
import { routes } from "../constants"

const HomePage = () => {
	return (
		<h1 className="home_page_wrapper">
			HomePage
			<Link to={routes.about}>About</Link>
			<Link to={routes.notFound}>NotFoundPage</Link>
		</h1>
	)
}

export default HomePage
