export interface ICreateCommand {
    execute(input: ICreateCommand.Input): Promise<void>
}

export namespace ICreateCommand {
    export type Input = {
        name: string;
        cities: {
            name: string;
            districts: {
                name: string
            }[]
        }[]
    }
}