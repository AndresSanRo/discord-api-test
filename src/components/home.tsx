import React from 'react';
import { getUser } from '../api/discord';
import { DiscordUser, initDiscordUser } from '../model';

function Home() {
    const [user, setUser] = React.useState<DiscordUser>(initDiscordUser());
    const fetchUser = async () => {
        const user: any = await getUser()
        setUser(user)
    }
    React.useEffect(() => {
        fetchUser()
    })

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