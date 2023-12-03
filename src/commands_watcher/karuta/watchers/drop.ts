import { Message, TextChannel } from 'discord.js'
import { CaduClient } from '../../../discord-bot'
import { ENV } from '../../../configs/Envs'
import axios from 'axios'
import { Colors } from '../../../utils/colors'
import { APIEmbedField } from 'discord-api-types/v10'
import { EmbedBuilder } from '@discordjs/builders'

export const PlayCommands = ['Play', 'play', 'p', 'P', 'tocar']

async function call_cadu_drop_watcher_api(drop_url: any) {
  const url = `${ENV.CADU_API_URL}/karuta/drop/watcher?drop_url=${drop_url}`
  const res = await axios.post(url);
  return res.data.drops
}

function cardFields(
  card: any
): APIEmbedField {
  const {position, edition, name, series, printing} = card

  return {
    name: `CARTA ${position}`,
    value: `\`\`\`\nAnime: ${series}\nNome: ${name}\nEdition: ${edition}\nPrinting: ${printing}\n\`\`\``,
  }
}

export async function watch_drop3(
  message: Message,
) {
  const attachments = message.attachments
  
  attachments.map(async (attachment) => {
    const cards = await call_cadu_drop_watcher_api(attachment.url)

    const fields = [
      cardFields(cards[0]),
      cardFields(cards[1]),
      cardFields(cards[2]),
    ]

    const embed = new EmbedBuilder()
    .setColor(new Colors()['green'])
    .setTitle(`Foram Dropadas as seguintes cartas!`)
    .setFields(fields)
    .setTimestamp()

    const channel = message.guild?.channels.cache.get('1001635782563467295') as TextChannel
    channel.send({ embeds: [embed] })
  })
}
