import styles from './CardButton.module.css';

export const CardButton = ({ children, className, setSelectedIdPost, id }) => {
	const cl = styles.cardButton + (className ? ' ' + className : '');
	return (
		<>
			{ id !== undefined ?
				<button className={cl} onClick={() => setSelectedIdPost(id)}>{children}</button>
				:
				<button className={cl} onClick={() => setSelectedIdPost(undefined)}>{children}</button>
			}
		</>
	);
};
 