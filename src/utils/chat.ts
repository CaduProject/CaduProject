import { Message } from 'discord.js'

const DEFAULT_MESSAGE = 'Você não está conectado a nenhum canal!'

export function isConnectedToChat(message: Message) {
  const channel = message.member?.voice.channel
  if (!channel) {
    message.channel.send(DEFAULT_MESSAGE)
    return false
  }
  return true
}
