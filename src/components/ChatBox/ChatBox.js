import { useEffect, useState } from 'react';
import {
  Paper,
  List,
} from '@mui/material';
import { useLocalStorage, useTimeout } from 'usehooks-ts';
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSelector, useDispatch } from 'react-redux';
import ChatItem from '../ChatItem'
import {
  initialLoad,
  pushMessage,
  loadMore,
} from '../../redux/reducers/chat.redux'



const ChatBox = () => {
  const dispatch = useDispatch()
  const { messages: messagesList } = useSelector((state) => state.chat)
  const [messages] = useLocalStorage('messages', { list: [] });
  const [hasMore, setHasMore] = useState(true);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    setIsInitialLoad(false)
    const reversedList = messages.list.slice().reverse();
    dispatch(initialLoad(reversedList.slice(0, 25)))
  }, []);

  useEffect(() => {
    if (messages.list.length && !isInitialLoad) {
      dispatch(pushMessage(messages.list[messages.list.length - 1]))
    }
  }, [messages.list.length])

  const fetchMoreData = () => {
    if (messagesList.length >= messages.list.length) {
      setHasMore(false);
      return;
    }

    const reversedList = messages.list.slice().reverse();
    dispatch(
      loadMore(reversedList)
    )
  };

  useEffect(() => {
  }, [messagesList])

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