import { ButtonStyle, Message } from 'discord.js'
import { logFunction } from '../../../utils/logger'
import { isConnectedToChat } from '../../../utils/chat'
import { Track } from 'discord-player'

const { ActionRowBuilder, ButtonBuilder } = require('discord.js')

export const PlayerCommands = ['Player', 'player', 'pm', 'Music', 'music', 'Musica', 'Music']

export type playerActions = 'previous' | 'pause' | 'resume' | 'skip'
export const playerActionsList: Array<playerActions | string> = [
  'previous',
  'pause',
  'resume',
  'skip',
]

function _createButton(
  id: playerActions,
  label: string,
  style = ButtonStyle.Secondary
) {
  return new ButtonBuilder().setCustomId(id).setLabel(label).setStyle(style)
}

export async function playerMenu(args: Array<string>, message: Message, track: Track) {
  logFunction('Player', args)

  if (!isConnectedToChat(message)) return

  try {
    const previous = _createButton('previous', '⏪')
    const pause = _createButton('pause', '⏸️')
    const resume = _createButton('resume', '▶️')
    const skip = _createButton('skip', '⏩')

    const row = new ActionRowBuilder().addComponents(
      previous,
      pause,
      resume,
      skip
    )
    await message.reply({
      content: `Playing: ${track.title}`,
      components: [row],
    })
  } catch (e) {
    console.log(`😭 Failed to create the player menu:\n\n${e}`)
  }
}
