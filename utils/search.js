export const search = (list, searchInput = "") => {
	const isRegex =
		searchInput[0] === "/" && searchInput[searchInput.length - 1] === "/";
	const regex = new RegExp(searchInput.slice(1, -1), "i");

	if (searchInput) {
		return list.filter(({ name, code }) => {
			if (isRegex) {
				return (
					regex.test(name?.toLowerCase()) ||
					regex.test(code?.toLowerCase())
				);
			}
			return (
				name?.toLowerCase().startsWith(searchInput.toLowerCase()) ||
				code?.toLowerCase().startsWith(searchInput.toLowerCase())
			);
		});
	}
	return [];
};
