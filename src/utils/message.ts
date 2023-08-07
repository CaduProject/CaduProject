import { EmbedBuilder, RGBTuple } from '@discordjs/builders'
import { Message } from 'discord.js'
import { Colors, colorPalette } from './colors'
import { Track } from 'discord-player'

export function embedTrackMessage(
  message: Message,
  color: colorPalette,
  title: string,
  { ...props }: Track
) {
  const embed = new EmbedBuilder()
    .setColor(new Colors()[color])
    .setTitle(title)
    .setURL(props.url)
    .setAuthor({
      name: props.author,
    })
    .setThumbnail(props.thumbnail)
    .setTimestamp()
    .setFooter({
      text: props.duration,
      iconURL: '⏳',
    })

  message.channel.send({ embeds: [embed] })
}
