import { useNavigateTo } from "../hook/useNavigateTo"

const AboutPage = () => {
	const { navigateFunction } = useNavigateTo()

	return (
		<>
			<h1>About</h1>
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

export default AboutPage
