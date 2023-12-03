import axios from 'axios'
import { APIEmbedField, Message, TextChannel } from 'discord.js'

import { CaduClient } from '../../../discord-bot'
import { logFunction } from '../../../utils/logger'
import { ENV } from '../../../configs/Envs'
import { EmbedBuilder } from '@discordjs/builders'
import { Colors } from '../../../utils/colors'

async function call_cadu_tag_by_anime_api(discord_id: string | undefined, tag: string | undefined, anime_names: string | undefined) {
    const url = `${ENV.CADU_API_URL}/karuta/tag/animes?tag=${tag}&anime_names=${anime_names}&discord_id=${discord_id}`
    const res = await axios.post(url);
    return res.data
}

function tag_string_list_add(
    string_list: any,
    position: number
  ): APIEmbedField {
  
    return {
      name: `Commando ${position+1}`,
      value: `\`\`\`${string_list}\`\`\``
    }
  }

export const TabByAnimeCommands = ['TagAnime', 'taganime', 'ta', 'P', 'tocar']

export async function tag_by_anime(
  args: Array<string>,
  message: Message,
  caduClient: CaduClient
) {
  logFunction('Taganime', args)
    const discordId = message.author.id
    const tag = args.shift()
    const animeName = args.join(" ")

    const data = await call_cadu_tag_by_anime_api(discordId, tag, animeName)
    const cards_to_tag = data.cards_to_tag

    const fields = []
    for (let i = 0; i < cards_to_tag.length; i++) {
        const addField = tag_string_list_add(cards_to_tag[i], i)
        fields.push(
            addField
        )
    }

    const embed = new EmbedBuilder()
    .setColor(new Colors()['blue'])
    .setTitle(`Brow bora colocar uma tag nessa suas cartinhas`)
    .setDescription(`Meu parceiros aqui estão os comandos que você vai precisar para tagear suas cartinhas:\n\nObs.: Por limitação da karuta cada conjunto possui 20 cartas para serem tageadas`)
    .setFields(fields)
    .setTimestamp()

    const channel = message.guild?.channels.cache.get('1001635782563467295') as TextChannel
    channel.send({ embeds: [embed] })
}