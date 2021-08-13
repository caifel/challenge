const list = ["Sicilian", "French", "Deutch", "Slav"];

export default function handler(req, res) {
	const searchText = (req.query.text || "").toLowerCase().trim();
	if (searchText) {
		const result = list.filter(
			(item) => item.toLowerCase().indexOf(searchText) !== -1
		);
		return res.status(200).json({ result });
	}
	return res.status(200).json({ result: [] });
}
