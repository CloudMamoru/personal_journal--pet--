import styles from './CardButton.module.css';

export const CardButton = ({ children, className }) => {
	const cl = styles.cardButton + (className ? ' ' + className : '');
	return (
		<button className={cl}>{children}</button>
	);
};
 