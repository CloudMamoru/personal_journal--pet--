import { useEffect, useReducer } from 'react';
import { Button } from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

export const JournalForm = ({addPost}) => {
	const [formState, dispatchFormState] = useReducer(formReducer, INITIAL_STATE);
	const {isValid, values, isFormReadyToSubmit} = formState;

  
	useEffect(() => {
		let timerId;

		if (!isValid.title || !isValid.text || ! isValid.date) {
			timerId = setTimeout(() => dispatchFormState({ type: 'RESET_VALIDITY' }), 2000);
		}

		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);


	
	useEffect(() => {
		if (isFormReadyToSubmit)
			addPost(values);
	}, [isFormReadyToSubmit]); 

	const addJournalItem = (event) => {
		event.preventDefault(); 
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		dispatchFormState({type: 'SUBMIT', payload: formProps});
	};


	return (
		<>
			<form className={styles.journalForm} onSubmit={addJournalItem}> 
				<div>
					<input type="text" name="title" className={cn(styles.input, styles.title, {
						[styles.invalid]: !isValid.title,
						[styles.voidInput]: true
					})} />
				</div>
				<div className={styles.wrapper}>
					<img src='/calendar.svg' alt='calendar' />
					<p className={styles.blockName} >Дата</p>
					<input type="date" name="date" className={cn(styles.input, styles.date, {
						[styles.invalid]: !isValid.date
					})} />
				</div>
				<div className={styles.wrapper}>
					<img src='/folder.svg' alt='calendar' />
					<p className={styles.blockName}>Метки</p>
					<input type="text" name='tag' className={cn(styles.input, styles.tag)} />
				</div>
				<textarea name="text" id="" cols="30" rows="10" className={cn(styles.input, styles.text, {
					[styles.invalid]: !isValid.text,
					[styles.voidInput]: true
				})}/>
				<Button text='Сохранить' className={styles.formButton} />
			</form>  
		</>
	);
};





// import { useEffect, useState } from 'react';
// import { Button } from '../Button/Button';
// import styles from './JournalForm.module.css';
// import cn from 'classnames';

// const INITIAL_STATE = {
// 	title: true,
// 	text: true,
// 	date: true
// };

// export const JournalForm = (props) => {
// 	const [formValidState, setFormValidState] = useState(INITIAL_STATE);
  
// 	useEffect(() => {
// 		let timerId;

// 		if (!formValidState.title || !formValidState.text || !formValidState.date) {
// 			timerId = setTimeout(() => setFormValidState(INITIAL_STATE), 2000);
// 		}

// 		return () => {
// 			clearTimeout(timerId);
// 		};
// 	}, [formValidState]);

// 	const addJournalItem = (event) => {
// 		event.preventDefault(); 
// 		const formData = new FormData(event.target);
// 		const formProps = Object.fromEntries(formData);

// 		let isFormValid = true;
// 		// Проверка на валидность форм: 
// 		if (!formProps.title?.trim().length) {
// 			setFormValidState(state => ({ ...state, title: false }));
// 			isFormValid = false; 
// 		} else {
// 			setFormValidState(state => ({ ...state, title: true }));
// 		}

// 		if (!formProps.text?.trim().length) {
// 			setFormValidState(state => ({ ...state, text: false }));
// 			isFormValid = false;
// 		}  else {
// 			setFormValidState(state => ({ ...state, text: true }));
// 		}

// 		if (!formProps.date) {
// 			setFormValidState(state => ({ ...state, date: false }));
// 			isFormValid = false;
// 		} else {
// 			setFormValidState(state => ({ ...state, date: true }));
// 		} 

// 		if (!isFormValid)
// 			return;

// 		props.addPost(formProps);
// 	};


// 	return (
// 		<>
// 			<form className={styles.journalForm} onSubmit={addJournalItem}> 
// 				<div>
// 					<input type="text" name="title" className={cn(styles.input, styles.title, {
// 						[styles.invalid]: !formValidState.title,
// 						[styles.voidInput]: true
// 					})} />
// 				</div>
// 				<div className={styles.wrapper}>
// 					<img src='/calendar.svg' alt='calendar' />
// 					<p className={styles.blockName} >Дата</p>
// 					<input type="date" name="date" className={cn(styles.input, styles.date, {
// 						[styles.invalid]: !formValidState.date
// 					})} />
// 				</div>
// 				<div className={styles.wrapper}>
// 					<img src='/folder.svg' alt='calendar' />
// 					<p className={styles.blockName}>Метки</p>
// 					<input type="text" name='tag' className={cn(styles.input, styles.tag)} />
// 				</div>
// 				<textarea name="text" id="" cols="30" rows="10" className={cn(styles.input, styles.text, {
// 					[styles.invalid]: !formValidState.text,
// 					[styles.voidInput]: true
// 				})}/>
// 				<Button text='Сохранить' className={styles.formButton} />
// 			</form>  
// 		</>
// 	);
// };
