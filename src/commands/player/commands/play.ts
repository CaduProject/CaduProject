import { Message } from 'discord.js'
import { CaduClient } from '../../../discord-bot'
import { logFunction } from '../../../utils/logger'
import { isConnectedToChat } from '../../../utils/chat'
import { embedTrackMessage } from '../../../utils/message'

export async function play(
  args: Array<string>,
  message: Message,
  { player }: CaduClient
) {
  logFunction('Play', args)

  if (!isConnectedToChat(message)) return
  const channel = message.member?.voice.channel!

  try {
    const { track } = await player.play(channel, args.join(' '))
    embedTrackMessage(message, 'purple', track)
  } catch (e) {
    console.log(`😭 Failed to play error oh no:\n\n${e}`)
  }
}
