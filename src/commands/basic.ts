import { userInfo } from "os"
import { addCommand, Command } from "../utils/commands"
import { ping } from "./basic/commands/ping"

export const basicCommandsList: Array<Command[]> = [
    addCommand(["ping"], ping),
    addCommand(["user", "profile"], userInfo)
]