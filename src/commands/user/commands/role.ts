import { Message } from "discord.js";
import { logFunction } from "../../../utils/logger";
import { _createButton } from "../../player/provider/message";

const { ActionRowBuilder } = require("discord.js");

export const RoleCommands = ["roles"];

function chunkArray(arr: any[], chunkSize: number) {
  const chunkedArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunkedArray.push(arr.slice(i, i + chunkSize));
  }
  return chunkedArray;
}

export async function setRoles(args: Array<string>, message: Message) {
  logFunction("setRoles", args);

  try {
    const roles = message.guild?.roles.cache;
    const buttons = roles?.map((role) =>
      _createButton<string>(role.id, role.name)
    );

    if (!buttons) throw new Error("No roles found!");

    const chunks = chunkArray(buttons, 5);
    const rows = chunks.map((chunk) =>
      new ActionRowBuilder().addComponents(...chunk)
    );

    await message.reply({
      content: `Escolha seus cargos`,
      components: rows,
    });
  } catch (e) {
    console.log(`😭 Failed to load roles:\n\n${e}`);
  }
}
