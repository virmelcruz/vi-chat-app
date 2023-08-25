import './App.css';
import { ChatBox, ChatAction, ChatHeader, ChatStarter } from './components';

const App = () => {
  return (
    <div className="App">
      <ChatStarter />
      <ChatHeader />
      <ChatBox />
      <ChatAction />
    </div>
  );
}

export default App;
