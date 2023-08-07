import { Message } from 'discord.js'
import { logFunction } from '../../utils/logger'
import { useQueue } from 'discord-player'

export async function resume(args: Array<string>, message: Message) {
  logFunction('Resume', args)

  const channel = message.member?.voice.channel
  if (!channel)
    return message.channel.send(`Você não está conectado a nenhum canal!`)

  try {
    const queue = useQueue(message.guild!.id)
    queue!.node.resume()
  } catch (e) {
    console.log(`😭 Failed to play error oh no:\n\n${e}`)
  }
}
