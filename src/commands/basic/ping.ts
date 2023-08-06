import { Message } from "discord.js";

export function Ping(args: Array<String>, message: Message) {
    message.channel.send(`Latencia Atual: ${message.createdTimestamp - Date.now()}ms`);
}