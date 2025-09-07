import { collection, onSnapshot } from "firebase/firestore";
import { useEffect } from "react";

const Subscriptions = () => {
	useEffect(() => {
		const unsubscribe = onSnapshot(collection(db, "cities"), () => {
			// Respond to data
			// ...
		});

		return () => {
			unsubscribe();
		};
	}, []);

	return <div>Subscriptions</div>;
};

export default Subscriptions;
