import { Command, addCommand } from "../../utils/commands";
import { RoleCommands, setRoles } from "./commands/role";

export const userCommandsList: Array<Command[]> = [
  addCommand(RoleCommands, setRoles),
];
