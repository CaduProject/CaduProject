import { Message } from "discord.js";
import { logFunction } from "../../utils/logger"
import { CaduClient } from "../../discord-bot/index"

export function Play(args: Array<String>, message: Message, caduClient: CaduClient) {
    logFunction("Play", args)

    const channel = message.member?.voice.channel;
    if (!channel) return message.channel.send(`Você não está conectado a nenhum canal!`);

    const guild = message.guild
    const player = caduClient.player
    message.channel.send(`TO DO IMPLEMENTAR PLAY DO PLAYER`);
}