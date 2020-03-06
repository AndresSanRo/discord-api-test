import { DiscordOauth } from "../model/discordOauth";

export const discordConfig: DiscordOauth = {
    clientId: "introduce_your_info",
    clientSecret: "introduce_your_info",
    scope: "identify",
    redirectUrl: "http://localhost:3000/login",
    apiUrl: "https://discordapp.com/api" 
}