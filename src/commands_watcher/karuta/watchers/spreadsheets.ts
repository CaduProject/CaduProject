import { Message, TextChannel } from 'discord.js'
import { CaduClient } from '../../../discord-bot'
import { ENV } from '../../../configs/Envs'
import axios from 'axios'
import { Colors } from '../../../utils/colors'
import { APIEmbedField } from 'discord-api-types/v10'
import { EmbedBuilder } from '@discordjs/builders'

export const PlayCommands = ['Play', 'play', 'p', 'P', 'tocar']

async function call_cadu_spreeadshet_watcher_api(csv_url: string, discord_id: string) {
  const url = `${ENV.CADU_API_URL}/karuta/spreadsheet/watcher?csv_url=${csv_url}&discord_id=${discord_id}`
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
    call_cadu_spreeadshet_watcher_api(csvUrl, discordId)
}
