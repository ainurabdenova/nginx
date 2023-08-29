import { useNavigateTo } from "../hook/useNavigateTo"

const NotFoundPage = () => {
	const { navigateFunction } = useNavigateTo()

	return (
		<>
			<h1>NotFoundPage</h1>
			<button
				onClick={() => {
					navigateFunction()
				}}
			>
				home
			</button>
		</>
	)
}

export default NotFoundPage
