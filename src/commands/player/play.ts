import { Message } from 'discord.js'
import { logFunction } from '../../utils/logger'
import { CaduClient } from '../../discord-bot/index'

export async function Play(
  args: Array<string>,
  message: Message,
  {player}: CaduClient
) {
  logFunction('Play', args)

  const channel = message.member?.voice.channel
  if (!channel)
    return message.channel.send(`Você não está conectado a nenhum canal!`)

  try {
    const { track } = await player.play(channel, args.join(' '))
    console.log(`🎉 I am playing ${track.title} 🎉`)
  } catch (e) {
    console.log(`😭 Failed to play error oh no:\n\n${e}`)
  }
}
