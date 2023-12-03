import { Message } from 'discord.js'
import { useQueue } from 'discord-player'
import { logFunction } from '../../../utils/logger'
import { isConnectedToChat } from '../../../utils/chat'

export const SkipCommands = ['Skip', 'skip', 'pular', 'Pular', 'Next', 'next']

export async function skip(args: Array<string>, message: Message) {
  logFunction('Skip', args)

  if (!isConnectedToChat(message)) return

  try {
    const queue = useQueue(message.guild!.id)
    queue!.node.skip()
    message.reply({ content: `⏩ | I am **skipping** the current track` })
  } catch (e) {
    console.log(`😭 Failed to skip:\n\n${e}`)
  }
}
