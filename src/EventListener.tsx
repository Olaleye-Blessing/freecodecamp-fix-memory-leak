import { useEffect, useState } from "react";

const EventListener = () => {
	const [windowWidth, setWindowWidth] = useState(0);

	useEffect(() => {
		function handleResize() {
			const width = window.innerWidth;
			console.log("__ Resizing Event Listerner __", width);
			setWindowWidth(width);
		}

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return <div>Width is: {windowWidth}</div>;
};

export default EventListener;
