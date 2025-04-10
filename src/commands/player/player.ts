import { Command, addCommand } from '../../utils/commands'
import { PauseCommands, pause } from '../player/commands/pause'
import { PlayCommands, play } from '../player/commands/play'
import { ResumeCommands, resume } from '../player/commands/resume'
import { SkipCommands, skip } from '../player/commands/skip'
import { StopCommands, stop } from '../player/commands/stop'
import { PreviousCommands, previous } from './commands/previous'
import { PlayerCommands, playerMenu } from './provider/message'

export const playerCommandsList: Array<Command[]> = [
  addCommand(PlayCommands, play),
  addCommand(SkipCommands, skip),
  addCommand(PauseCommands, pause),
  addCommand(ResumeCommands, resume),
  addCommand(StopCommands, stop),
  addCommand(PreviousCommands, previous),
  addCommand(PlayerCommands, playerMenu),
]