import { useSelector } from 'react-redux';
import { useSessionStorage } from 'usehooks-ts'
import { Avatar } from '@mui/material'

const ChatHeader = () => {
  const user = useSelector((state) => state.user.user)

  return (
    <header className="App-header">
      <Avatar sx={{ marginRight: '10px' }} alt={user.name} src={user.avatar} />
      <p>
        {user.name}
      </p>
      
    </header>
  )
}

export default ChatHeader