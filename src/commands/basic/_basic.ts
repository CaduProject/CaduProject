import { Ping } from "./ping"
import { UserInfo } from "./user-info"
import { addCommand, Command } from "../../utils/commands"

export const basicCommandsList: Array<Command> = [
    addCommand("ping", Ping),
    addCommand("user", UserInfo)
]