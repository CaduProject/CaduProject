import { BaseInteraction, CacheType, Message } from 'discord.js'
import { playerActions } from './message'
import { pause } from '../commands/pause'
import { previous } from '../commands/previous'
import { resume } from '../commands/resume'
import { skip } from '../commands/skip'

const playerAction = {
  pause: {
    callback: (message: Message) => pause([], message),
  },
  previous: {
    callback: (message: Message) => previous([], message),
  },
  resume: {
    callback: (message: Message) => resume([], message),
  },
  skip: {
    callback: (message: Message) => skip([], message),
  },
}

export function handlePlayerInteraction(
  interactionId: playerActions,
  message: Message
) {
  playerAction[interactionId].callback(message)
}
