import { MakeBotClient, MakeBotPlayer } from "../utils/makeapp"
import { ENV } from "../configs/Envs"

import { validateEnv } from "../utils/validateEnvs"
import { Commands } from "../commands/commands"
import { Message } from "discord.js";

function RunCommand(prefix: string, message: Message) {
  console.log(`Message from ${message.author.username}: ${message.content}`);
  const args = message.content.replace(prefix, "")
  const argsList = args.split(" ")
  Commands(argsList, message)
}

(async () => {
  if (validateEnv()) return;

  var prefix = ENV.BOT_PREFIX
  var client = MakeBotClient()
  var player = MakeBotPlayer(client)

  client.on("messageCreate", (message) => {
    if (message.author.bot) return; 

    if(message.content.startsWith(prefix)) {
      RunCommand(prefix, message)
    }
  })

})();
