import { Message } from "discord.js";
import { CaduClient } from "../../discord-bot/index"

export function Ping(args: Array<String>, message: Message, caduClient: CaduClient) {
    message.channel.send(`Latencia Atual: ${message.createdTimestamp - Date.now()}ms`);
}