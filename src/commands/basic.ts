import { Ping } from "./basic/ping"
import { UserInfo } from "./basic/user-info"
import { addCommand, Command } from "../utils/commands"

export const basicCommandsList: Array<Command> = [
    addCommand("ping", Ping),
    addCommand("user", UserInfo)
]