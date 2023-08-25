import { useSelector, useDispatch } from 'react-redux';
import { useSessionStorage } from 'usehooks-ts'
import { Avatar } from '@mui/material'
import {
  logOut,
} from '../../redux/reducers/user.redux'

const ChatHeader = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user)
  const [, setUserSession] = useSessionStorage('user-sesh', {})

  const handleLogout = () => {
    const emptyUser = { name: '', avatar: '' };
    setUserSession(emptyUser)
    dispatch(logOut(emptyUser));
  }

  return (
    <header className="App-header">
      <Avatar sx={{ marginRight: '10px' }} alt={user.name} src={user.avatar} />
      <p>
        {user.name}
      </p>
      <p style={{ position: 'absolute', right: 10, }} onClick={handleLogout}>
        logout
      </p>
    </header>
  )
}

export default ChatHeader