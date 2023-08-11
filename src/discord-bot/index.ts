import { MakeBotClient, MakeBotPlayer } from "../utils/makeapp"
import { Client } from "discord.js";
import { Player } from "discord-player"
import { ENV } from "../configs/envs"

import { validateEnv } from "../utils/validateEnvs"
import { Commands } from "./commands"
import { Message } from "discord.js";

function RunCommand(prefix: string, message: Message, caduClient: CaduClient) {
  console.log(`Message from ${message.author.username}: ${message.content}`);
  const args = message.content.replace(prefix, "")
  const argsList = args.split(" ")
  Commands(argsList, message, caduClient)
}

export class CaduClient {
  client: Client
  player: Player

  constructor(client: Client, player: Player){
    this.client = client
    this.player = player
  }
}

function createClient(): CaduClient{
  const client = MakeBotClient()
  const player = MakeBotPlayer(client)
  return new CaduClient(client, player)
}  


(async () => {
  if (validateEnv()) return;

  var prefix = ENV.BOT_PREFIX

  const caduClient = createClient()
  const discordClient = caduClient.client

  discordClient.on("messageCreate", (message) => {
    if (message.author.bot) return; 

    if(message.content.trim().startsWith(prefix)) {
      try {
        RunCommand(prefix, message, caduClient)
      } catch (e) {
        message.channel.send(`Comando não encontrado`);
      }
    }
  })
})();

process.on("uncaughtException", (reason: Error) => {
  console.log(`[uncaughtException] => FATAL ERROR\nReason: ${reason}`)
})

process.on("unhandledRejection", (reason: Error) =>  {
  console.log(`[unhandledRejection] => FATAL ERROR\nReason: ${reason}`)
})