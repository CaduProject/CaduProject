import { Message } from 'discord.js'
import { CaduClient } from '../../../discord-bot'
import { logFunction } from '../../../utils/logger'
import { isConnectedToChat } from '../../../utils/chat'
import { embedTrackMessage } from '../../../utils/message'
import { playerMenu } from '../provider/message'

export const PlayCommands = ['Play', 'play', 'p', 'P', 'tocar']

export async function play(
  args: Array<string>,
  message: Message,
  { player }: CaduClient
) {
  logFunction('Play', args)

  if (!isConnectedToChat(message)) return
  const channel = message.member!.voice.channel!

  try {

    let url = args.join(' ')
    const isAPlaylist = url.includes('&list=')
    if (isAPlaylist) {
      const playlist = new URLSearchParams(url)
      url = `https://www.youtube.com/playlist?list=${playlist.get('list')}`
    }

    const { track } = await player.play(channel, url)
    embedTrackMessage(message, 'purple', track)
    playerMenu(args, message, track)
  } catch (e) {
    console.log(`😭 Failed to play error oh no:\n\n${e}`)
  }
}
