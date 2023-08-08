import { ping } from "./commands/ping"
import { Command, addCommand } from "../../utils/commands"
import { userInfo } from "./commands/user-info"

export const basicCommandsList: Array<Command[]> = [
    addCommand(["ping"], ping),
    addCommand(["user", "profile"], userInfo)
]