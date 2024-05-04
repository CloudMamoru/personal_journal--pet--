import styles from './JournalItem.module.css';

export const JournalItem = (props) => {  
	console.log(props.date);
	const formatDate = new Intl.DateTimeFormat('ru-Ru').format(new Date(props.date));

	return (
		<>
			<h2 className={styles.journalItemHeader}>{props.title}</h2>
			<h2 className={styles.journalItemBody}>
				<div className={styles.journalItemDate}>{formatDate}</div>
				<div className={styles.journalItemText}>{props.text}</div>
			</h2>
		</>
	);
}; 
