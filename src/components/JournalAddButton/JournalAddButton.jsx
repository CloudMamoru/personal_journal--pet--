import { CardButton } from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';

const JournalAddButton = () => {
	return (
		<CardButton className={styles.journalAdd }>
			<img src="/plus.svg" alt="плюс" /> Новое воспоминание
		</CardButton>
	);
};

export default JournalAddButton;