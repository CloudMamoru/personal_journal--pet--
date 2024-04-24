import { useState } from 'react';
import { Button } from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';

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
				<div>
					<input type="text" name="title" className={cn(styles.input, styles.title, {
						[styles.invalid]: !formValidState.title,
						[styles.voidInput]: true
					})} />
				</div>
				<div className={styles.wrapper}>
					<img src='/calendar.svg' alt='calendar' />
					<p className={styles.blockName} >Дата</p>
					<input type="date" name="date" className={cn(styles.input, styles.date, {
						[styles.invalid]: !formValidState.date
					})} />
				</div>
				<div className={styles.wrapper}>
					<img src='/folder.svg' alt='calendar' />
					<p className={styles.blockName}>Метки</p>
					<input type="text" name='tag' className={cn(styles.input, styles.tag)} />
				</div>
				<textarea name="text" id="" cols="30" rows="10" className={cn(styles.input, styles.text, {
					[styles.invalid]: !formValidState.text,
					[styles.voidInput]: true
				})}/>
				<Button text='Сохранить' className={styles.formButton} />
			</form>  
		</>
	);
};
