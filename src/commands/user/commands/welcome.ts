import { EmbedBuilder } from "@discordjs/builders";
import { log } from "console";
import { Client, GuildMember } from "discord.js";
import { Colors } from "../../../utils/colors";
// import { addField } from "../../../utils/message";

export function onJoinServer(member: GuildMember, discordClient: Client) {
  try {
    // TODO: create auto role management
    // const fields = [
    //   addField("Adicione seu cargo aqui:", "<#1222657707371270155>"),
    // ];

    try {
      const embed = new EmbedBuilder()
        .setColor(new Colors()["green"])
        .setTitle(`👋 Bem vindo, ${member.displayName}`)
        .setThumbnail(member.displayAvatarURL())
        // .setFields(fields)
        .setFooter({
          text: `Você pode fazer parte do desenvolvimento deste bot também!`,
        });

      const channel: any = discordClient.channels.cache.find((channel: any) =>
        ["bem-vindo", "welcome"].includes(channel.name.toLowerCase())
      );

      channel.send({ embeds: [embed] });
    } catch (ex) {
      log(ex);
    }
  } catch (e) {
    log(e);
  }
}
