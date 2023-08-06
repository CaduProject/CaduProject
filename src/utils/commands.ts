export interface ICommand {
    arg: string,
    caller: Function
}

export type command = {
    arg: string
    caller: Function
}

export class Command {
    arg: string
    caller: Function

    constructor(arg: string, caller: Function){
        this.arg = arg
        this.caller = caller
    }
}

export function addCommand(arg: string, caller: Function){
    return new Command(arg, caller)
}

export function findCommand(arg: string, commandsList: Array<Command>): Command {
    const commandIndex = commandsList.findIndex(command => command.arg === arg)
    return commandsList[commandIndex]
}