import React from 'react';
import './css/App.css';
import Principal from './components/principal';
import { getUser } from './api/discord'

function App() {
  const [user, setUser] = React.useState<string>("");
  const fetchUser = async () => {
    const user: any = await getUser()
    setUser(user.username)
  }
  React.useEffect(() => {
    fetchUser()
  })


  return (
    <Principal value={ user } />
  );
}

export default App;
