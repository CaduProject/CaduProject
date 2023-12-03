import { Message } from 'discord.js'
import { logFunction } from '../../../utils/logger'
import { isConnectedToChat } from '../../../utils/chat'
import { useHistory } from 'discord-player'

export const PreviousCommands = ['Previous', 'previous', 'Back', 'back', 'Voltar', 'volta', 'Anterior', 'anterior']

export async function previous(args: Array<string>, message: Message) {
  logFunction('Previous', args)

  if (!isConnectedToChat(message)) return
  const history = useHistory(message.guild!.id)
  if (!history?.previousTrack)
    return message.reply({
      content: `Não há músicas anteriores`,
    })

  await history.previous()
  return message.reply({
    content: `⏪ | I am **replaying** the previous track`,
  })
}
