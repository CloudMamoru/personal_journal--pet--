import './CardButton.css';

export const CardButton = ({ children, className }) => {
	const cl = 'card-button' + (className ? ' ' + className : '');
	
	return (
		<button className={cl}>{children}</button>
	);
};
 