import { useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import { Button, TextField, Box } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';
import { ChatBox } from './components';

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
        <p>
          {user.name}
        </p>
      </header>
      <ChatBox />
      <Box sx={{ width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
        <TextField
          id="outlined-basic" label="Outlined" variant="outlined"
          fullWidth
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
        />
        <Button variant="contained" onClick={handleOnClick} >Submit</Button>
      </Box>
    </div>
  );
}

export default App;
