import { Fragment, useRef, useEffect, useState } from 'react';
import {
  Paper,
  List,
  ListItem,
  Divider,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
} from '@mui/material';

const ChatBox = () => {
  const mockData = [{
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Ali Connors',
    },
    content: 'test'
  }, {
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Vi Cruz',
    },
    content: 'test'
  }, {
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Ali Connors',
    },
    content: 'test'
  }, {
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Vi Cruz',
    },
    content: 'test'
  }, {
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Ali Connors',
    },
    content: 'test'
  }, {
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Vi Cruz',
    },
    content: 'test'
  }, {
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Ali Connors',
    },
    content: 'test'
  }, {
    user: {
      avatar: '/static/images/avatar/1.jpg',
      name: 'Vi Cruz',
    },
    content: 'test'
  }]

  const ref = useRef(null);
  const [list, setList] = useState(mockData)
  
  // Scroll at the bottom
  useEffect(() => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
    })
  }, [])

  // handles getting of data
  const handleScrollOnTop = (e) => {
    if(e.currentTarget.scrollTop === 0) {
      alert('fetches data');
      setList([
        ...list, 
        ...list, 
      ])
   }
  }

  return (
    <Paper 
      sx={{ width: '100%', maxHeight: 200, overflow: 'auto', borderRadius: 0 }}
      onScroll={handleScrollOnTop}
    >
      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {list.map(({ user, content }, index) => (
          <Fragment>
            <ListItem key={`${user.name}-${content}-${index}`} alignItems="flex-start" >
              <ListItemAvatar>
                <Avatar alt={user.name} src={user.avatar} />
              </ListItemAvatar>
              <ListItemText
                primary={user.name}
                secondary={
                  <Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {content}
                    </Typography>
                  </Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </Fragment>
        ))}
        <div ref={ref} />
      </List>

    </Paper>
  );
}

export default ChatBox;