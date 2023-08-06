import { Message } from "discord.js";
import { logFunction } from "../../utils/logger"

export function Play(args: Array<String>, message: Message) {
    logFunction("Play", args)
    message.channel.send(`TO DO IMPLEMENTAR PLAY DO PLAYER`);
}