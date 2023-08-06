import { Message, EmbedBuilder } from "discord.js";
import { capitalizeStr } from "../../utils/ui/display"

export function UserInfo(args: Array<String>, message: Message) {
    let user = message.mentions.users.first() || message.author
    let avatar = user.avatarURL({ forceStatic: true, extension: "png", size: 1024 });

    let embed = new EmbedBuilder()
    .setColor(0x00FF00)
    .setTitle(`Usuário: ${capitalizeStr(user.displayName)}`)
    .setImage(avatar)
    .setTimestamp()

    message.channel.send({ embeds: [embed] });
}