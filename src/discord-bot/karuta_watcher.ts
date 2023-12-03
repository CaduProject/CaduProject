import { Message } from "discord.js"

import { watch_drop3 } from "../commands_watcher/karuta/watchers/drop"
import { watch_spreadsheet } from "../commands_watcher/karuta/watchers/spreadsheets"

function Watchers(message: Message) {
    const message_content = message.content
    if (message_content.endsWith('is dropping 3 cards!')) {
        watch_drop3(message)
    } else if (message_content == "I'm dropping 3 cards since this server is currently active!") {
        watch_drop3(message)
    }
}

function EmbededWatchers(message: Message, embed: any) {
    const description = embed.data.description
    if (description.includes('your new spreadsheet can be viewed **[here]')) {
      watch_spreadsheet(description)
    }
}

export function KarutaWatchers(message: Message) {
     if (message.embeds) {
        for (let i = 0; i < message.embeds.length; i++){
            EmbededWatchers(message, message.embeds[i])
        }
    } else {
        Watchers(message)
    }

}