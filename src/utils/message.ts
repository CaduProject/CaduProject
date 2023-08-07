import { EmbedBuilder, RGBTuple } from '@discordjs/builders'
import { Message } from 'discord.js'
import { Colors, colorPalette } from './colors'

export function embedMessage(
  message: Message,
  color: colorPalette,
  title: string
) {
  const embed = new EmbedBuilder()
    .setColor(new Colors()[color])
    .setTitle(title)
    .setTimestamp()

  message.channel.send({ embeds: [embed] })
}
