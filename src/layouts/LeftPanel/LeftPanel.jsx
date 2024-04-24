import styles from './LeftPanel.module.css';

const LeftPanel = ({children}) => {
	return (
		<div className={styles.leftPanel}>
			{children}
		</div>
	);
};

export default LeftPanel;