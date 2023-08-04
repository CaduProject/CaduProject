import { Client } from "discord.js";

import { connectDatabase } from "../databse/database"
import { IntentOptions } from "../configs/IntentOptions"
import { validateEnv } from "../utils/validateEnvs"
import { ENV } from "../configs/Envs"

(async () => {
  if (validateEnv()) return;
  const BOT = new Client({intents: IntentOptions});

  await connectDatabase()
  await BOT.login(ENV.BOT_TOKEN);
  BOT.on("ready", () => console.log("Connected to Discord!"));
})();