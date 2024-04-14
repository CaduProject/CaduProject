import { Command, addCommand } from "../../utils/commands";
import { tag_by_anime } from "./tag/tag_by_anime"; 

export const karutaTagsCommands: Array<Command[]> = [
    addCommand(["taganime", "ta"], tag_by_anime),
]