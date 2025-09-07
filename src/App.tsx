import { useState } from "react";
import "./App.css";
// import Timers from "./Timers";
import ApiCall from "./ApiCall";
// import EventListener from "./EventListener";

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
			{/* {showComponent && <EventListener />} */}
			{/* {showComponent && <Timers />} */}
			{showComponent && <ApiCall />}
		</>
	);
}

export default App;
