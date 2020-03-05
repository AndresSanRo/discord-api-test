import { discordConfig } from './config'

export const getDiscordToken = (): string => {
    if (window.location.hash === "") {
        const url = `https://discordapp.com/api/oauth2/authorize?response_type=token&client_id=${discordConfig.client_id}&state=15773059ghq9183habn&scope=identify`;
        window.location.replace(url);
        return ""
      } else {
        const hash = window.location.hash.split('&')
        const accessToken = hash[1].split('=')
        return accessToken[1]
      }        
}

export const getUser = (): Promise<string> => {
    const token = getDiscordToken();
    const url = `https://discordapp.com/api/users/@me`;
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    return fetch(url, { headers: headers }).then(response => response.json())
}