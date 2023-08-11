import { EmbedBuilder, RGBTuple } from '@discordjs/builders'
import { Message } from 'discord.js'
import { APIEmbedField } from 'discord-api-types/v10'
import { Colors, colorPalette } from './colors'
import { Track } from 'discord-player'
import { log } from 'console'

function truncateText(text: string) {
  let truncate = text.slice(0, 50)
  return text.length > 50 ? (truncate += '...') : truncate
}

function addField(
  name: string,
  value: string,
  inline: boolean = false
): APIEmbedField {
  return {
    name: name,
    value: truncateText(value),
    inline,
  }
}

export function embedTrackMessage(message: Message, color: colorPalette, track: Track) {
  const source = track.queryType as string
  const fields = [
    addField('Cantor:', track.author),
    addField('Música:', track.title),
    addField('Fonte:', source),
  ]

  try {
    const embed = new EmbedBuilder()
      .setColor(new Colors()[color])
      .setTitle(`🎵 Estou tocando: ${track.title} 🎵`)
      .setURL(track.url)
      .setThumbnail(track.thumbnail)
      .setFields(fields)
      .setTimestamp()
      .setFooter({
        text: `⏳ Duração: ${track.duration} ⏳`,
      })

    message.channel.send({ embeds: [embed] })
  } catch (ex) {
    log(ex)
  }
}
