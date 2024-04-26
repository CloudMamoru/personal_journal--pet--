import './App.css';
import { CardButton } from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import { JournalForm } from './components/JournalForm/JournalForm';
import { JournalItem } from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import { useLocalStorage } from './hooks/use-localstorage.hook';

function mapPosts(posts) {
	if (!posts) {
		return [];
	} 
	return posts.map(p => ({
		...p,
		date: new Date(p.date)
	}));
}

function App() {
	const [posts, setPosts] = useLocalStorage('data');

	const addPost = (post) => {
		setPosts([...mapPosts(posts), {
			id: Math.max(...posts.map(el => el.id), 0) + 1,
			title: post.title,
			date: new Date(post.date),
			text: post.text
		}]);
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
					{ posts?.length ? posts.sort(sortPosts).map(post => (
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

