import './JournalItem.css';

export const JournalItem = (props) => {  
	const formatDate = new Intl.DateTimeFormat('ru-Ru').format(props.date);

	return (
		<>
			<h2 className="journal-item__header">{props.title}</h2>
			<h2 className="journal-item__body">
				<div className="journal-item__date">{formatDate}</div>
				<div className="journal-item__text">{props.text}</div>
			</h2>
		</>
	);
};
