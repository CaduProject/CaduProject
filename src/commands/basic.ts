import { ping } from "./basic/ping"
import { userInfo } from "./basic/user-info"
import { addCommand, Command } from "../utils/commands"

export const basicCommandsList: Array<Command> = [
    addCommand("ping", ping),
    addCommand("user", userInfo)
]