import { countries } from "../../mockData/countries";
import { search } from "../../utils/search";

export default function handler(req, res) {
	const searchText = (req.query.text || "").toLowerCase().trim();
	if (searchText) {
		const result = search(countries, searchText);
		return res.status(200).json({ result });
	}
	return res.status(200).json({ result: [] });
}
