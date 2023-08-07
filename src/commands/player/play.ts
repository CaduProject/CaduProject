import { Message } from 'discord.js'
import { logFunction } from '../../utils/logger'
import { CaduClient } from '../../discord-bot/index'

export async function Play(
  args: Array<string>,
  message: Message,
  caduClient: CaduClient
) {
  logFunction('Play', args)

  const channel = message.member?.voice.channel
  if (!channel)
    return message.channel.send(`Você não está conectado a nenhum canal!`)

  const guild = message.guild
  const player = caduClient.player
  message.channel.send(`TO DO IMPLEMENTAR PLAY DO PLAYER`)

  try {
    const { track } = await player.play(message.channel.id, args.join(' '))
    console.log(`🎉 I am playing ${track.title} 🎉`)
  } catch (e) {
    console.log(`😭 Failed to play error oh no:\n\n${e}`)
  }
}
