import { useState } from "react";
import "./App.css";
import EventListener from "./EventListener";

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
			{showComponent && <EventListener />}
		</>
	);
}

export default App;
