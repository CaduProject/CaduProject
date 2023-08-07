import { Message } from 'discord.js'
import { logFunction } from '../../utils/logger'
import { useQueue } from 'discord-player'
import { isConnectedToChat } from '../../utils/chat'

export async function skip(args: Array<string>, message: Message) {
  logFunction('Skip', args)

  if (!isConnectedToChat(message)) return

  try {
    const queue = useQueue(message.guild!.id)
    queue!.node.skip()
  } catch (e) {
    console.log(`😭 Failed to skip:\n\n${e}`)
  }
}
