import { Message } from 'discord.js'
import { logFunction } from '../../utils/logger'
import { useQueue } from 'discord-player'
import { isConnectedToChat } from '../../utils/chat'

export async function resume(args: Array<string>, message: Message) {
  logFunction('Resume', args)

  if (!isConnectedToChat(message)) return

  try {
    const queue = useQueue(message.guild!.id)
    queue!.node.resume()
  } catch (e) {
    console.log(`😭 Failed to play error oh no:\n\n${e}`)
  }
}
