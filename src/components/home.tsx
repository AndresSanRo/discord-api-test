import React from 'react';
import { fetchDiscordUser } from '../api/';
import { DiscordUser, initDiscordUser } from '../model';

function Home() {
    const [user, setUser] = React.useState<DiscordUser>(initDiscordUser());
    const getUser = async () => {
        const user: any = await fetchDiscordUser()
        setUser(user)
    }
    React.useEffect(() => {
        getUser()
    }, [])

    if (user.id !== "0") {
        return (
            <>
                <p>Logged in</p>
                <p>{user.username}</p>
            </>
        );
    } else {
        return (            
            <p>Not logued</p>
        )
    }
  }
  
  export default Home;