import { useEffect, useState, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useSessionStorage } from 'usehooks-ts'
import {
  Modal,
  Box,
  Typography,
  TextField,
  Button,
} from '@mui/material';
import {
  loginStart,
  loginSuccess,
  loginFailure,
} from '../../redux/reducers/user.redux'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

const ChatStarter = () => {
  const dispatch = useDispatch()
  const [userSession, setUserSession] = useSessionStorage('user-sesh', {})
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')

  useEffect(() => {
    console.log('session', userSession);
    dispatch(loginStart);
    if (!userSession.name) {
      setIsModalOpen(true);
    } else {
      dispatch(loginSuccess(userSession));
    }
  }, [])

  const handleClose = () => {
    setIsModalOpen(false)
  }

  const handleOnClick = () => {
    setIsModalOpen(false);
    setUserSession({ name, avatar: 'aang' })
    dispatch(loginSuccess({ name, avatar: 'aang' }));
  }

  return (
    <Modal
      open={isModalOpen}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Welcome to Vi Chat App
        </Typography>
        <Box sx={{ width: '100%', flexGrow: 1, display: 'flex', flexDirection: 'row' }}>
          <TextField
            id="outlined-basic" label="What is your name?" variant="outlined"
            fullWidth
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <Button variant="contained" onClick={handleOnClick} >Submit</Button>
        </Box>
      </Box>
    </Modal>
  )
}

export default ChatStarter