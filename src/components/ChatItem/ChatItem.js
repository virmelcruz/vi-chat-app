
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
import { useSelector } from 'react-redux';

const ChatItem = ({ user, content, index }) => {
  const userSession = useSelector((state) => state.user.user)
  const isOwned = user.name === userSession.name

  return (
    <Fragment key={`${user.name}-${content}-${index}`}>
      <ListItem
        key={`${user.name}-${content}-${index}`}
        alignItems="flex-start"
        sx={{
          ...(isOwned ? {
            flexDirection: 'row-reverse',
            textAlign: 'right',
          } : {})
        }}
      >
        <ListItemAvatar
          sx={{
            ...(isOwned ? {
              display: 'flex',
              justifyContent: 'flex-end'
            } : {})
          }}
        >
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
      <Divider />
    </Fragment>
  )
}

export default ChatItem