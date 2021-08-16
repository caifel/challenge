export const search = (list, searchInput = "") => {
	const regex = new RegExp(searchInput, "i");

	if (searchInput) {
		return list.filter(
			({ name, code }) =>
				regex.test(name?.toLowerCase()) ||
				regex.test(code?.toLowerCase())
		);
	}
	return [];
};
