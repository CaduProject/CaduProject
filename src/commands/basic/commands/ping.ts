import { Message } from "discord.js";
import { CaduClient } from "../../../discord-bot";

export function ping(
  args: Array<string>,
  message: Message,
  caduClient: CaduClient
) {
  message.channel.send(
    `Latencia Atual: ${message.createdTimestamp - Date.now()}ms`
  );
}
