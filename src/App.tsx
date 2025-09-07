import { useState } from "react";
import "./App.css";

function App() {
	const [showComponent, setShowComponent] = useState(true);
	const toggleComponent = () => {
		setShowComponent((prev) => !prev);
	};

	return (
		<>
			<button onClick={toggleComponent}>
				{showComponent ? "Hide" : "show"} component
			</button>
		</>
	);
}

export default App;
