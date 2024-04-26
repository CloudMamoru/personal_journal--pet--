import styles from './JournalItem.module.css';

export const JournalItem = (props) => {  
	const formatDate = props.date instanceof Date && !isNaN(props.date) ? new Intl.DateTimeFormat('ru-Ru').format(props.date) : 'Invalid Date';


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
