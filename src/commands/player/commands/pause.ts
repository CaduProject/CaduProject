import { Message } from 'discord.js'
import { useQueue } from 'discord-player'
import { logFunction } from '../../../utils/logger';
import { isConnectedToChat } from '../../../utils/chat';

export async function pause(
  args: Array<string>,
  message: Message,
) {
  logFunction('Pause', args)

  if (!isConnectedToChat(message)) return

  try {
    const queue = useQueue(message.guild!.id);
    queue!.node.pause();
    message.reply({ content: `⏸️ | I am **pausing** the current track` })
  } catch (e) {
    console.log(`😭 Failed to pause:\n\n${e}`)
  }
}
