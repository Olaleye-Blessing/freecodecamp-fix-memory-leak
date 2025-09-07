import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());

app.get("/posts", async (_, res) => {
	const posts = [
		{
			id: "1",
			title: "a title",
			views: 100,
		},
		{
			id: "2",
			title: "another title",
			views: 200,
		},
	];

	await new Promise((r) => setTimeout(r, 3000));

	res.json({ posts }).status(200);
});

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`);
});
