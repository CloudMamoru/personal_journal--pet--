import styles from './JournalList.module.css';

const JournalList = ({children}) => {
	return (
		<div className={styles.journalList}>
			{children}
		</div>
	);
};

export default JournalList;