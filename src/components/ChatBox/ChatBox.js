import { useEffect, useState } from 'react';
import {
  Paper,
  List,
} from '@mui/material';
import { useLocalStorage, useTimeout } from 'usehooks-ts';
import InfiniteScroll from 'react-infinite-scroll-component'
import ChatItem from '../ChatItem'


const ChatBox = () => {
  const [messages] = useLocalStorage('messages', { list: [] });
  const reversedList = messages.list.slice().reverse();
  const [messagesList, setMessagesList] = useState(reversedList.slice(0, 25))
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsInitialLoad(false)
  }, []);

  useEffect(() => {
    if (messages.list.length && !isInitialLoad) {
      setMessagesList([
        messages.list[messages.list.length - 1],
        ...messagesList,
      ])
    }
  }, [messages.list.length])

  const fetchMoreData = () => {
    console.log('fetches more data')

    if (messagesList.length >= messages.list.length) {
      setHasMore(false);
      console.log('no more')
      return;
    }

    setMessagesList(messagesList.concat(reversedList.slice(messagesList.length, messagesList.length + 25)))
  };

  return (
    <Paper 
      sx={{ width: '100%', maxHeight: 570, borderRadius: 0 }}
    >
      <List sx={{ width: '100%', height: 570, bgcolor: 'background.paper' }}>
        <InfiniteScroll
          dataLength={messagesList.length}
          next={fetchMoreData}
          hasMore={hasMore}
          height={570}
          endMessage={
            <p style={{textAlign:'center'}}><b>Yay! You've seen it all!</b></p>
          }
          inverse={true}
          style={{ display: 'flex', flexDirection: 'column-reverse' }} //To put endMessage and loader to the top.
          
        >
          {messagesList.map(({ user, content }, index) => (
            <ChatItem user={user} content={content} key={`${user.name}-${user.content}-${index}`}/>
          ))}
        </InfiniteScroll>
      </List>

    </Paper>
  );
}

export default ChatBox;