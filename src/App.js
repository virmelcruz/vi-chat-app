import { useSelector } from 'react-redux';
import './App.css';
import { ChatBox, ChatAction} from './components';

const App = () => {
  const user = useSelector((state) => state.user.user)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          {user.name}
        </p>
      </header>
      <ChatBox />
      <ChatAction />
    </div>
  );
}

export default App;
