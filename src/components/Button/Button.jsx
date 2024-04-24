import './Button.css';

export const Button = ({text, onClick }) => {
	return (
		<button className='button accent' onClick={onClick}>{text}</button>
	);
};
