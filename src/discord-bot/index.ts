import { Player, Track } from "discord-player";
import { Client, GuildMember, Message } from "discord.js";
import { handlePlayerInteraction } from "../commands/player/provider/handler";
import {
  playerActions,
  playerActionsList,
} from "../commands/player/provider/message";
import { watch_spreadsheet } from "../commands_watcher/karuta/watchers/spreadsheets";
import { ENV } from "../configs/Envs";
import { MakeBotClient, MakeBotPlayer } from "../utils/makeapp";
import { validateEnv } from "../utils/validateEnvs";
import { Commands } from "./commands";
import { KarutaWatchers } from "./karuta_watcher";
import { onJoinServer } from "../commands/user/commands/welcome";

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
  const prefix = ENV.BOT_PREFIX;

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
      try {
        if (playerActionsList.includes(interaction.customId as playerActions)) {
          handlePlayerInteraction(
            interaction.customId as playerActions,
            interaction.message
          );
        }
      } catch (error) {
        console.log("[handlePlayerInteraction] => ", error);
      }
    }
  });

  discordClient.on("messageUpdate", (_, message) => {
    const msg = message as Message;

    if (msg.author.id === KarutaID && message.embeds) {
      for (const element of message.embeds) {
        const description = element.data.description;
        if (
          description?.includes("your new spreadsheet can be viewed **[here]")
        ) {
          watch_spreadsheet(description);
        }
      }
    }
  });

  discordClient.on("guildMemberAdd", (member: GuildMember) => {
    onJoinServer(member, discordClient);
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
