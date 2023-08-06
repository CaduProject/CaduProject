import { Play } from "./play"
import { addCommand, Command } from "../../utils/commands"

export const playerCommandsList: Array<Command> = [
    addCommand("play", Play),
]