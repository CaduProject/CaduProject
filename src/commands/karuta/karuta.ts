import { Command, addCommand } from "../../utils/commands";
import { karutaTagsCommands } from "./tag";

export const karutaCommandList: Array<Command[]> = [
    ...karutaTagsCommands
]