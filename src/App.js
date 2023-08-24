import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';
import { Button } from '@mui/material';

function App() {
  const user = useSelector((state) => state.user.user)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {user.name}
        </p>
        <Button variant="contained">Hello world</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
