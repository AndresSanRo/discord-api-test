import { discordConfig } from './config'

export const getDiscordToken = (): string => {
    if (window.location.hash === "") {
        const url = `${discordConfig.apiUrl}/oauth2/authorize?response_type=token&client_id=${discordConfig.clientId}&state=15773059ghq9183habn&scope=identify`;
        window.location.replace(url);
        return ""
      } else {
        const hash = window.location.hash.split('&')
        const accessToken = hash[1].split('=')
        return accessToken[1]
      }        
}

export const getUser = async (): Promise<string> => {
    const token = getDiscordToken();
    const url = `${discordConfig.apiUrl}/users/@me`;
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    return await fetch(url, { headers: headers }).then(response => response.json())
}