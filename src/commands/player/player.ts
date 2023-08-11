import { Track } from 'discord-player'
import { Command, addCommand } from '../../utils/commands'
import { pause } from '../player/commands/pause'
import { play } from '../player/commands/play'
import { resume } from '../player/commands/resume'
import { skip } from '../player/commands/skip'
import { stop } from '../player/commands/stop'
import { previous } from './commands/previous'
import { playerMenu } from './provider/message'

export const playerCommandsList: Array<Command[]> = [
  addCommand(['play', 'p'], play),
  addCommand(['skip'], skip),
  addCommand(['pause'], pause),
  addCommand(['resume'], resume),
  addCommand(['stop'], stop),
  addCommand(['previous', 'back'], previous),
  addCommand(['player'], playerMenu),
]