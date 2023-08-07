import { play } from "./player/play"
import { addCommand, Command } from "../utils/commands"

export const playerCommandsList: Array<Command> = [
    addCommand("play", play),
]