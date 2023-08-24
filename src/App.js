import { useState } from 'react';
import logo from './logo.svg';
import { useSelector } from 'react-redux';
import './App.css';
import { Button, TextField } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';

const App = () => {
  const user = useSelector((state) => state.user.user)
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useLocalStorage('messages', { list: [] });

  const handleOnClick = () => {
    setMessages({
      list: [
        ...messages.list, {
        content: message,
        type: 'mine'
      }],
    });
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {user.name}
        </p>
        {messages.list.map(({ content, type }) => (
          <div>
            {content}
            {type}
          </div>
        ))}
        <TextField
          id="filled-basic"
          label="Filled"
          variant="filled"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Button variant="contained" onClick={handleOnClick} >Submit</Button>
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
