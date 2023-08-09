import { Message } from 'discord.js'
import { useQueue } from 'discord-player'
import { logFunction } from '../../../utils/logger'
import { isConnectedToChat } from '../../../utils/chat'

export async function stop(args: Array<string>, message: Message) {
  logFunction('Stop', args)

  if (!isConnectedToChat(message)) return

  try {
    const queue = useQueue(message.guild!.id)
    queue!.node.stop()
  } catch (e) {
    console.log(`😭 Failed to stop:\n\n${e}`)
  }
}
