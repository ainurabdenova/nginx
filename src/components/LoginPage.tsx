import { useNavigateTo } from "../hook/useNavigateTo"

const LoginPage = () => {
	const { navigateFunction } = useNavigateTo()

	return (
		<>
			<h1>Login Page</h1>
			<button
				onClick={() => {
					navigateFunction()
				}}
			>
				Home
			</button>
		</>
	)
}

export default LoginPage
