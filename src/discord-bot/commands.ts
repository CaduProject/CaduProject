import { Message } from "discord.js";

import { CaduClient } from ".";
import { basicCommandsList } from "../commands/basic/basic";
import { playerCommandsList } from "../commands/player/player";
import { tagsCommandsList } from "../commands/karuta/karuta";
import { findCommand, Command } from "../utils/commands";
import { userCommandsList } from "../commands/user/user";

const commandsList: Array<Command[]> = [
  ...basicCommandsList,
  ...playerCommandsList,
  ...tagsCommandsList,
  ...userCommandsList,
];

export function Commands(
  [cmd, ...args]: Array<string>,
  message: Message,
  caduClient: CaduClient
) {
  const command = findCommand(cmd, commandsList.flat());
  command.caller(args, message, caduClient);
}
