import { RouterProvider } from "react-router-dom";

import { router } from "./router";

import '../shared/styles/style.scss'

function App(): JSX.Element {
	return <RouterProvider router={ router } />
}

export default App;
