import { EmbedBuilder, RGBTuple } from '@discordjs/builders'
import { Message } from 'discord.js'
import { APIEmbedField } from 'discord-api-types/v10'
import { Colors, colorPalette } from './colors'
import { Track } from 'discord-player'
import { log } from 'console'

function truncateText(text: string){
  let truncate = text.slice(0, 50)  
  return text.length > 50 ? truncate += '...' : truncate
}

function addField(name: string, value: string, inline: boolean = false): APIEmbedField{
  return {
    name: name,
    value: truncateText(value),
    inline
  }
}


export function embedTrackMessage(
  message: Message,
  color: colorPalette,
  text: string,
  { ...props }: Track
) {
  const source = props.queryType as string
  const fields = [
    addField("Cantor:", props.author),
    addField("Música:", props.title),
    addField("Fonte:", source)
  ]

  try {
    const embed = new EmbedBuilder()
    .setColor(new Colors()[color])
    .setTitle(text)
    .setURL(props.url)
    .setAuthor({
      name: props.author,
    })
    .setThumbnail(props.thumbnail)
    .setFields(fields)
    .setTimestamp()
    .setFooter({
      text: `⏳ Duração: ${props.duration} ⏳`,
    })

  message.channel.send({ embeds: [embed] })
  } catch(ex) {
    log(ex)
  }
}
