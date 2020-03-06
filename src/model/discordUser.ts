export interface DiscordUser {
    id: string,
    username: string,
    discriminator: string,
    avatar: string,
    email?: string,
    flags?: number,
    premium_type?: number,
}

export const initDiscordUser = () => {
    return {
        id: "0",
        username: "John Doe",
        discriminator: "1337",
        avatar: "8342729096ea3675442027381ff50dfe",
        verified: true,
        email: "mock@discordapp.com",
        flags: 0,
        premium_type: 0
    } as DiscordUser
}