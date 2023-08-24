import { useState } from 'react';
import { Button, TextField, Box } from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';

const ChatAction = () => {
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
  )
}

export default ChatAction