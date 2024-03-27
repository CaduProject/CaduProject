import { MakeBotClient, MakeBotPlayer } from "../utils/makeapp";
import { Client } from "discord.js";
import { Player, Track } from "discord-player";
import { validateEnv } from "../utils/validateEnvs";
import { Commands } from "./commands";
import { Message } from "discord.js";
import { handlePlayerInteraction } from "../commands/player/provider/handler";
import {
  playerActions,
  playerActionsList,
} from "../commands/player/provider/message";
import { KarutaWatchers } from "./karuta_watcher";
import { watch_spreadsheet } from "../commands_watcher/karuta/watchers/spreadsheets";
import { ENV } from "../configs/envs";

const KarutaID = "646937666251915264";

interface playlist {
  guildId: string;
  playlist: Array<Track>;
}

function RunCommand(prefix: string, message: Message, caduClient: CaduClient) {
  // console.log(`Message from ${message.author.username}: ${message.content}`)
  const args = message.content.replace(prefix, "");
  const argsList = args.split(" ");
  Commands(argsList, message, caduClient);
}

export class CaduClient {
  client: Client;
  player: Player;

  constructor(client: Client, player: Player) {
    this.client = client;
    this.player = player;
  }
}

function createClient(): CaduClient {
  const client = MakeBotClient();
  const player = MakeBotPlayer(client);
  return new CaduClient(client, player);
}

if (!validateEnv()) {
  var prefix = ENV.BOT_PREFIX;

  const caduClient = createClient();
  const discordClient = caduClient.client;

  discordClient.on("messageCreate", (message) => {
    if (message.author.id === KarutaID) {
      KarutaWatchers(message);
    } else {
      if (message.author.bot) return;

      if (message.content.trim().startsWith(prefix)) {
        try {
          RunCommand(prefix, message, caduClient);
        } catch (e) {
          message.channel.send(`Comando não encontrado`);
        }
      }
    }
  });

  discordClient.on("interactionCreate", (interaction) => {
    if (interaction.isButton()) {
      if (playerActionsList.includes(interaction.customId))
        try {
          handlePlayerInteraction(
            interaction.customId as playerActions,
            interaction.message
          );
        } catch (error) {
          console.log("[handlePlayerInteraction] => ", error);
        }
    }
  });

  discordClient.on("messageUpdate", (_, message) => {
    message = message as Message;

    if (message.author.id === KarutaID && message.embeds) {
      for (let i = 0; i < message.embeds.length; i++) {
        const description = message.embeds[0].data.description;
        if (
          description?.includes("your new spreadsheet can be viewed **[here]")
        ) {
          watch_spreadsheet(description);
        }
      }
    }
  });

  process.on("uncaughtException", (reason) => {
    console.log("[uncaughtException] => FATAL ERROR");
    console.log(reason);
  });

  process.on("unhandledRejection", (reason) => {
    console.log("[unhandledRejection] => FATAL ERROR");
    console.log(reason);
  });
}
