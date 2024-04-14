import axios from 'axios'
import { Message } from 'discord.js'

import { ENV } from '../../../configs/Envs'
import { MULTIPART_HEADER } from '../../../configs/constants'
import { CaduClient } from '../../../discord-bot'
import { downloadKarutaCSV } from '../../../utils/fileHandler'
import { jsonToFormData } from '../../../utils/formData'
import { logFunction } from '../../../utils/logger'
import { embedText } from '../../../utils/message'
import { capitalizeStr } from '../../../utils/ui/display'

export async function tag_by_anime(
  args: Array<string>,
  message: Message,
  caduClient: CaduClient
) {
  logFunction('Taganime', args)
  
  try {
    if (message.attachments) {
      let attach = message.attachments.first();

      if (!attach) {
        message.channel.send(`Brow, acho que você está esquecendo do arquivo`);
        return
      }

      const file = await downloadKarutaCSV(attach.url)
      const tag = args.shift()
      const animeName = args.join(" ")
      const formData = jsonToFormData({
        tag: tag,
        anime_name: animeName,
      })

      formData.append('file', new Blob([file.file], {type: "text/csv"}), file.path)
      axios.post(`${ENV.CADU_API}/karuta/analyzer/v1/tags/animes`, formData, {
        headers: MULTIPART_HEADER
      })
      .then((res) => {
        const data = res.data
        const cardToTag = data.cardToTag

        let msg = ""
        for (let i = 0; i < cardToTag.length; i++) {
          msg += 
          `
            ${animeName} -> ${(i + 1).toString()}: \n
            ${cardToTag[i]} \n
          `
        }
        embedText(`Ai brow, que cartas maneiras de ${capitalizeStr(animeName)}`, message, 'white', msg)
      })
    }
  } catch (e) {
    message.channel.send(`Brow, acho que acabei me perdendo você viu o cadu por ai?`);
  }
}
