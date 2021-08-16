import { useEffect, useState } from "react";
import { DebounceInput } from "react-debounce-input";
import styles from "./styles.module.scss";

const _T = (str) => str;
const Challenge = () => {
	// @Variables
	const [searchText, setSearchText] = useState("");
	const [list, setList] = useState([]);
	// @ Events
	const handleSearchTextChange = (e) => setSearchText(e.target.value);
	// @DOM
	const renderActionBar = () => {
		return (
			<div className={styles.actionBar} key="action-bar">
				<label htmlFor="search-input">{_T("Search")}</label>
				<DebounceInput
					id="search-input"
					className={styles.input}
					minLength={1}
					debounceTimeout={300}
					onChange={handleSearchTextChange}
				/>
			</div>
		);
	};
	const renderList = () => {
		if (list.length === 0) {
			return (
				<div className={styles.noData}>
					<p>
						<b>{_T("No Result")}</b>
					</p>
					<p>
						<small>{_T("(Try something else)")}</small>
					</p>
				</div>
			);
		}
		return (
			<ul className={styles.listContainer} key="list">
				{list.map((item, index) => (
					<li key={`item-${index}`}>
                        <strong>{item.code}</strong>
                        <span>{item.name}</span>
                    </li>
				))}
			</ul>
		);
	};

	// @Effects
	useEffect(() => {
		const asyncFn = async () => {
			const response = await fetch(`api/list?text=${searchText}`);
			const { result } = await response.json();
			setList(result);
		};
		asyncFn();
	}, [searchText]);

	return (
		<div className={styles.container}>
			{[renderActionBar(), renderList()]}
		</div>
	);
};

export default Challenge;
