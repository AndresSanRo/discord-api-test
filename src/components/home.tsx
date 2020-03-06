import React from 'react';
import { fetchDiscordUser } from '../api/';
import { DiscordUser, initDiscordUser } from '../model';
import '../css/App.css'

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
                
                <h1 className="primaryText">Discord API test</h1>              
                <div className="centerText">
                    <p>
                        <span className="primaryText">Logged in as: </span>
                        <span className="secondaryText">{user.username}</span>
                    </p>
                </div>
            </>
        );
    } else {
        return (            
            <div className="centerText">
                <p>
                    <span className="primaryText">Not logged in</span>
                </p>
            </div>            
        )
    }
  }
  
  export default Home;