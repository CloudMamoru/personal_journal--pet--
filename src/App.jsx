import { useEffect, useState } from 'react';
import './App.css';
import { CardButton } from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';
import { JournalItem } from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';

function App() {
	const [posts, setPosts] = useState([]);

	// Чтение данных из localStorage
	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('data'));

		if (data) {
			setPosts(data.map(post => ({
				...post,
				date: new Date(post.date)
			})));
		}
	}, []);

	// Сохранение данных на localStorage
	useEffect(() => {
		if (posts.length) {
			localStorage.setItem('data', JSON.stringify(posts));
		}
	}, [posts]);

	const addPost = ({ title, text, date }) => {
		const newDate = new Date(date);
		const newPost = {
			id: Math.max(...posts.map(el => el.id), 0) + 1,
			title,
			date: newDate,
			text 
		};
		setPosts(oldPosts => [...oldPosts, newPost]);
	};

	const sortPosts = (a, b) => {
		if (a.date < b.date) 
			return 1;
		else 
			return -1;
	};

	return ( 
		<div className='app'>
			<LeftPanel>
				<Header /> 
				<JournalAddButton />
				<JournalList>
					{ posts.length ? posts.sort(sortPosts).map(post => (
						<CardButton key={post.id}> 
							<JournalItem
								title={post.title}
								date={post.date}
								text={post.text}
							/>
						</CardButton>
					)) : <p>Постов нет!</p>
					}
				</JournalList>
			</LeftPanel>
			<Body>
				<JournalForm addPost={addPost} />
			</Body>
		</div>
	);
}

export default App;

