import { addCommand, Command } from "../../utils/commands";
import { tag_by_anime, TabByAnimeCommands } from "./tags/tag_by_anime";

export const tagsCommandsList: Array<Command[]> = [
  addCommand(TabByAnimeCommands, tag_by_anime),
];
