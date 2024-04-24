import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './JournalForm.module.css';

export const JournalForm = (props) => {
	const [formValidState, setFormValidState] = useState({
		title: true,
		text: true,
		date: true
	});
  
	const addJournalItem = (event) => {
		event.preventDefault(); 
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		let isFormValid = true;
		// Проверка на валидность форм: 
		if (!formProps.title?.trim().length) {
			setFormValidState(state => ({ ...state, title: false }));
			isFormValid = false;
		} else {
			setFormValidState(state => ({ ...state, title: true }));
		}

		if (!formProps.text?.trim().length) {
			setFormValidState(state => ({ ...state, text: false }));
			isFormValid = false;
		}  else {
			setFormValidState(state => ({ ...state, text: true }));
		}

		if (!formProps.date) {
			setFormValidState(state => ({ ...state, date: false }));
			isFormValid = false;
		} else {
			setFormValidState(state => ({ ...state, date: true }));
		} 

		if (!isFormValid)
			return;

		props.addPost(formProps);
	};

	return (
		<>
			<form className={styles.journalForm} onSubmit={addJournalItem}> 
				<input type="text" name="title" className={`${!formValidState.title && styles.invalid}`} />
				<input type="date" name="date" className={`${!formValidState.date && styles.invalid}`}/>
				<input type="text" name='tag'/>
				<textarea name="text" id="" cols="30" rows="10" className={`${!formValidState.text && styles.invalid}`}></textarea>
				<Button text='Сохранить'/>
			</form> 
		</>
	);
};
