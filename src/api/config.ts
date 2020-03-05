import { Oauth } from "../model/oauth";

export const discordConfig: Oauth = {
    client_id: "introduce_your_info",
    client_secret: "introduce_your_info",
    scope: "identify",
    redirect_url: "http://localhost:3000/login",    
}