import { Button } from '../Button/Button';
import styles from './JournalForm.module.css';

export const JournalForm = (props) => {
  
	const addJournalItem = (event) => {
		event.preventDefault(); 
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		props.addPost(formProps);
		console.log(formProps);
	};

	return (
		<>
			<form className={styles.journalForm} onSubmit={addJournalItem}> 
				<input type="text" name="title" />
				<input type="date" name="date" />
				<input type="text" name='tag'/>
				<textarea name="post" id="" cols="30" rows="10"></textarea>
				<Button text='Сохранить'/>
			</form> 
		</>
	);
};
