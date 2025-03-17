import { Message } from "discord.js";
import { capitalizeStr } from "../../../utils/ui/display";
import { EmbedBuilder } from "@discordjs/builders";

export function userInfo(args: Array<string>, message: Message) {
  const user = message.mentions.users.first() || message.author;
  const avatar = user.avatarURL({
    forceStatic: true,
    extension: "png",
    size: 1024,
  });

  const embed = new EmbedBuilder()
    .setColor(0x00ff00)
    .setTitle(`Usuário: ${capitalizeStr(user.displayName)}`)
    .setImage(avatar)
    .setTimestamp();

  message.channel.send({ embeds: [embed] });
}
