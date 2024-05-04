import { CardButton } from '../CardButton/CardButton';
import styles from './JournalAddButton.module.css';

const JournalAddButton = ({setSelectedIdPost}) => {
	return (
		<CardButton className={styles.journalAdd} setSelectedIdPost={setSelectedIdPost} >
			<img src="/plus.svg" alt="плюс" /> Новое воспоминание
		</CardButton>
	);
};

export default JournalAddButton;