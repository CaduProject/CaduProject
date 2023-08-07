import { RGBTuple } from 'discord.js'

export type colorPalette =
  | 'red'
  | 'green'
  | 'blue'
  | 'purple'
  | 'white'
  | 'black'
  | 'gray'

export class Colors {
  red: RGBTuple | number = 0xff0000
  green: RGBTuple | number = 0x00ff00
  blue: RGBTuple | number = 0x0000ff
  purple: RGBTuple | number = 0x663399
  white: RGBTuple | number = 0xffffff
  black: RGBTuple | number = 0x000000
  gray: RGBTuple | number = 0xcccccc

  constructor() {}
}
