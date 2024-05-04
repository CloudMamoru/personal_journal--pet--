import { useEffect, useReducer, useRef } from 'react';
import { Button } from '../Button/Button';
import styles from './JournalForm.module.css';
import cn from 'classnames';
import { formReducer, INITIAL_STATE } from './JournalForm.state';

export const JournalForm = ({addPost, deletePost, post}) => {
	const [formState, dispatchFormState] = useReducer(formReducer, INITIAL_STATE);
	const { isValid, values, isFormReadyToSubmit } = formState;
	const titleRef = useRef(); 
	const dateRef = useRef();
	const textRef = useRef();

	useEffect(() => {
		dispatchFormState({type: 'SET_VALUES_FROM_SELECTED_POST', payload: post[0]});
	}, [post]);

	const focusError = (isValid) => {
		switch (true) {
		case !isValid.title:
			titleRef.current.focus();
			break;
		case !isValid.date:
			dateRef.current.focus();
			break;
		case !isValid.text:
			textRef.current.focus();
			break;
		}
	};
  
	useEffect(() => {
		let timerId;
		if (!isValid.title || !isValid.text || !isValid.date) {
			focusError(isValid);
			timerId = setTimeout(() => dispatchFormState({ type: 'RESET_VALIDITY' }), 2000);
		}
		return () => {
			clearTimeout(timerId);
		};
	}, [isValid]);


	useEffect(() => {
		if (isFormReadyToSubmit) {
			addPost(values);
			dispatchFormState({ type: 'RESET_VALUES' });
		}
	}, [isFormReadyToSubmit, addPost, values]); 

	const addJournalItem = (event) => {
		event.preventDefault(); 
		dispatchFormState({type: 'SUBMIT'});
	};

	const deleteJournalItem = (event) => {
		event.preventDefault(); 
		dispatchFormState({ type: 'RESET_VALUES' });
		deletePost();
	};

	const setValues = (e) => {
		dispatchFormState({
			type: 'SET_VALUE',
			payload: {
				name: e.target.name,
				value: e.target.value
			}
		});
	};

	return (
		<>
			<form className={styles.journalForm} onSubmit={addJournalItem}> 
				<div className={styles.firstInput}>
					<input
						ref={titleRef}
						type="text"
						name="title"
						value={values.title}
						onChange={setValues}
						className={cn(styles.input, styles.title, {
							[styles.invalid]: !isValid.title,
							[styles.voidInput]: true
						})} /> 
					<img className={styles.imgButton} src='/delete.svg' alt='delete' onClick={deleteJournalItem} />
				</div>
				<div className={styles.wrapper}>
					<img src='/calendar.svg' alt='calendar' />
					<p className={styles.blockName} >Дата</p>
					<input
						ref={dateRef}
						type="date"
						name="date"
						value={values.date}
						onChange={setValues}
						className={cn(styles.input, styles.date, {
							[styles.invalid]: !isValid.date
						})} />
				</div>
				<div className={styles.wrapper}>
					<img src='/folder.svg' alt='calendar' />
					<p className={styles.blockName}>Метки</p>
					<input
						type="text"
						name='tag'
						value={values.tag}
						onChange={setValues}
						className={cn(styles.input, styles.tag)} />
				</div>
				<textarea
					ref={textRef}
					name="text"
					id=""
					cols="30"
					rows="10"  
					value={values.text}
					onChange={setValues}
					className={cn(styles.input, styles.text, {
						[styles.invalid]: !isValid.text,
						[styles.voidInput]: true
					})}/>
				<Button className={styles.formButton}>Сохранить</Button>
			</form>  
		</>
	);
};