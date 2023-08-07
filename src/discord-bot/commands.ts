import { Message } from "discord.js"

import { basicCommandsList } from "../commands/basic"
import { playerCommandsList } from "../commands/player"
import { findCommand, Command } from "../utils/commands"

const commandsList: Array<Command> = [
    ...basicCommandsList,
    ...playerCommandsList
]
import { CaduClient } from "."

export function Commands([cmd, ...args]: Array<string>, message: Message, caduClient: CaduClient) {
    const command = findCommand(cmd, commandsList)
    command.caller(args, message, caduClient)
}