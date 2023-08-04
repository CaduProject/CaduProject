import { Client } from "discord.js";

import { connectDatabase } from "../databse/database"
import { IntentOptions } from "../configs/IntentOptions"
import { ENV } from "../configs/Envs"

(async () => {
  const BOT = new Client({intents: IntentOptions});

  await connectDatabase()
  await BOT.login(ENV.BOT_TOKEN);
  BOT.on("ready", () => console.log("Connected to Discord!"));
})();