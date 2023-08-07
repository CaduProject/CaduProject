import { Message } from 'discord.js'
import { logFunction } from '../../utils/logger'
import { CaduClient } from '../../discord-bot/index'
import { useQueue } from 'discord-player'

export async function pause(
  args: Array<string>,
  message: Message,
) {
  logFunction('Pause', args)

  const channel = message.member?.voice.channel
  if (!channel)
    return message.channel.send(`Você não está conectado a nenhum canal!`)

  try {
    const queue = useQueue(message.guild!.id);
    queue!.node.pause();
  } catch (e) {
    console.log(`😭 Failed to pause:\n\n${e}`)
  }
}
