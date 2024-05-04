import styles from './Button.module.css';

export const Button = ({children, onClick, className }) => {
	return (
		<button className={`${styles.button} ${styles.accent} ${className}`} onClick={onClick}>{children}</button>
	);
};
