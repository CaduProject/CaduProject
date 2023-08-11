import { Client } from "discord.js";
import { Player } from "discord-player"
import { YouTubeExtractor, SpotifyExtractor, SoundCloudExtractor, AppleMusicExtractor } from "@discord-player/extractor"

import { validateEnv } from "../utils/validateEnvs"
import { connectDatabase } from "../databse/database"
import { IntentOptions } from "../configs/IntentOptions"
import { ENV } from "../configs/envs"

export function MakeBotPlayer(client: any): Player {
  const player = new Player(client);
  player.extractors.loadDefault();
  player.extractors.register(SpotifyExtractor, {});
  player.extractors.register(SoundCloudExtractor, {});
  player.extractors.register(YouTubeExtractor, {});
  player.extractors.register(AppleMusicExtractor, {});
  console.log("Bot Player Created!")
  return player
}

export function MakeBotClient(): Client {
  const client = new Client(IntentOptions);
  const player = new Player(client);

  connectDatabase()
  console.log("Database Connected!")
  client.login(ENV.BOT_TOKEN);

  console.log("Bot is logged into Discord!")
  return client
}