import { useSelector } from 'react-redux';
import { useSessionStorage } from 'usehooks-ts'

const ChatHeader = () => {
  const user = useSelector((state) => state.user.user)

  return (
    <header className="App-header">
      <p>
        {user.name}
      </p>
    </header>
  )
}

export default ChatHeader