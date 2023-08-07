import { Message } from 'discord.js'
import { logFunction } from '../../utils/logger'
import { CaduClient } from '../../discord-bot/index'
import { isConnectedToChat } from '../../utils/chat'
import { embedTrackMessage } from '../../utils/message'

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
    const text = `🎵 Estou tocando: ${track.title} 🎵`

    embedTrackMessage(message, 'purple', text, track)
  } catch (e) {
    console.log(`😭 Failed to play error oh no:\n\n${e}`)
  }
}
