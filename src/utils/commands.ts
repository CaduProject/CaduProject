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

export function addCommand(args: Array<string>, caller: Function) {
    return args.map((arg) => new Command(arg, caller))
}

export function findCommand(arg: string, commandsList: Array<Command>): Command {
    return commandsList.find(command => command.arg === arg) as Command
}