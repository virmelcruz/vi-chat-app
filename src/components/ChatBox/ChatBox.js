import { Fragment, useRef, useEffect, useState } from 'react';
import {
  Paper,
  List,
} from '@mui/material';
import { useLocalStorage } from 'usehooks-ts';
import ChatItem from '../ChatItem'


const ChatBox = () => {
  const [messages, setMessages] = useLocalStorage('messages', { list: [] });

  const ref = useRef(null);
  const scrollToBottom = () => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }
  
  // Scroll at the bottom
  useEffect(() => {
    scrollToBottom()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // handles getting of data
  const handleScrollOnTop = (e) => {
    if(e.currentTarget.scrollTop === 0) {
      alert('fetches data');
   }
  }

  return (
    <Paper 
      sx={{ width: '100%', maxHeight: 570, overflow: 'auto', borderRadius: 0 }}
      onScroll={handleScrollOnTop}
    >
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {messages.list.map(({ user, content }, index) => (
          <ChatItem user={user} content={content} />
        ))}
        <div ref={ref} />
      </List>

    </Paper>
  );
}

export default ChatBox;