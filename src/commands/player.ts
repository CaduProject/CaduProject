import { play } from "./player/play"
import { addCommand, Command } from "../utils/commands"
import { skip } from "./player/skip"
import { pause } from "./player/pause"
import { resume } from "./player/resume"
import { stop } from "./player/stop"

export const playerCommandsList: Array<Command[]> = [
    addCommand(["play", "p"], play),
    addCommand(["skip"], skip),
    addCommand(["pause"], pause),
    addCommand(["resume"], resume),
    addCommand(["stop"], stop)
]