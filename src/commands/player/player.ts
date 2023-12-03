import { Track } from 'discord-player'
import { Command, addCommand } from '../../utils/commands'
import { pause, PauseCommands } from '../player/commands/pause'
import { play, PlayCommands } from '../player/commands/play'
import { resume, ResumeCommands } from '../player/commands/resume'
import { skip, SkipCommands } from '../player/commands/skip'
import { stop, StopCommands } from '../player/commands/stop'
import { previous, PreviousCommands} from './commands/previous'
import { playerMenu, PlayerCommands } from './provider/message'

export const playerCommandsList: Array<Command[]> = [
  addCommand(PlayCommands, play),
  addCommand(SkipCommands, skip),
  addCommand(PauseCommands, pause),
  addCommand(ResumeCommands, resume),
  addCommand(StopCommands, stop),
  addCommand(PreviousCommands, previous),
  addCommand(PlayerCommands, playerMenu),
]