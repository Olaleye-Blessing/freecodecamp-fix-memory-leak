import { useEffect, useState } from "react";

const Timers = () => {
	const [countDown, setCountDown] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setCountDown((prev) => prev + 1);
			console.log("__ Interval __");
		}, 1000);

		return () => {
			clearInterval(timer);
		};
	}, []);

	console.log("__ Outside effect __");

	return <div>Countdown: {countDown}</div>;
};

export default Timers;
