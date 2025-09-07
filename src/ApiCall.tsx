import { useEffect, useState } from "react";

interface Post {
	id: string;
	title: string;
	views: number;
}

const ApiCall = () => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState("");
	const [data, setData] = useState<Post[] | null>(null);

	useEffect(() => {
		const controller = new AbortController();

		const getTodos = async () => {
			try {
				setLoading(true);

				console.time("POSTS");
				const req = await fetch("http://localhost:3001/posts", {
					signal: controller.signal,
				});
				const res = await req.json();
				console.timeLog("POSTS");
				setData(res.posts);
			} catch (error) {
				if (error instanceof Error && error.name === "AbortError") {
					console.log("Request was cancelled");
					return;
				}

				console.log("__ ERROR __", error);
				setError("Try again");
			} finally {
				setLoading(false);
			}
		};

		getTodos();

		return () => {
			controller.abort();
		};
	}, []);

	return (
		<div style={{ marginTop: "2rem" }}>
			<p>ApiCall Component</p>
			{loading ? (
				<p>Loading...</p>
			) : error ? (
				<p>{error}</p>
			) : data ? (
				<p>Views: {data[0].views}</p>
			) : null}
		</div>
	);
};

export default ApiCall;
