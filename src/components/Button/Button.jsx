import styles from './Button.module.css';

export const Button = ({text, onClick, className }) => {
	return (
		<button className={`${styles.button} ${styles.accent} ${className}`} onClick={onClick}>{text}</button>
	);
};
