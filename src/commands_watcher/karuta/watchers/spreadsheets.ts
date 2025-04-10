import axios from "axios";
import { ENV } from "../../../configs/Envs";

export const PlayCommands = ["Play", "play", "p", "P", "tocar"];

async function call_cadu_spreeadshet_watcher_api(
  csv_url: string,
  discord_id: string
) {
  const url = `${ENV.CADU_API_URL}/karuta/spreadsheet/watcher?csv_url=${csv_url}&discord_id=${discord_id}`;
  axios.post(url);
}

export async function watch_spreadsheet(description: any) {
  const discordId = description.substring(
    description.indexOf("@") + 1,
    description.lastIndexOf(">")
  );

  const csvUrl = description.substring(
    description.indexOf("(") + 1,
    description.lastIndexOf(")")
  );
  call_cadu_spreeadshet_watcher_api(csvUrl, discordId);
}
