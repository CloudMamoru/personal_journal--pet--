import styles from './Body.module.css';

const Body = ({children}) => {
	return (
		<div className={styles.body}>
			{children}
		</div>
	);
};

export default Body; 