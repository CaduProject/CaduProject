import { Message } from "discord.js"

import { basicCommandsList } from "../commands/basic/_basic"
import { playerCommandsList } from "../commands/player/_player"
import { findCommand, Command } from "../utils/commands"

const commandsList: Array<Command> = [
    ...basicCommandsList,
    ...playerCommandsList
]
import { CaduClient } from "../discord-bot"

export function Commands(args: Array<string>, message: Message, caduClient: CaduClient) {
    const arg = args[0]
    const command = findCommand(arg, commandsList)

    args.shift()
    command.caller(args, message, caduClient)
}