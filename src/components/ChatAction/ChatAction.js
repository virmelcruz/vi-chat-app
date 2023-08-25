import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';
import { useSelector } from 'react-redux';

const ChatAction = () => {
  const [inputMessage, setInputMessage] = useState('')
  const [messages, setMessages] = useLocalStorage('messages', { list: [] });
  const user = useSelector((state) => state.user.user)

  const handleOnClick = () => {
    if (inputMessage !== '') {
      setMessages({
        list: [
          ...messages.list, {
          content: inputMessage,
          user,
        }],
      });
      setInputMessage('');
    }
  }

  const handleOnChange = (event) => {
    setInputMessage(event.target.value);
  }

  return (
    <Box sx={{
      width: '100%',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'row',
      position: 'absolute',
      bottom: 0,
    }}>
      <TextField
        id="outlined-basic" label="Message" variant="outlined"
        fullWidth
        value={inputMessage}
        onChange={handleOnChange}
      />
      <Button variant="contained" onClick={handleOnClick} disabled={!user.name} >Submit</Button>
    </Box>
  )
}

export default ChatAction