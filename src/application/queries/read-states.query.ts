import { StateRepository } from "../../domain/repositories/state.repository";

export class ReadStatesQuery {
    constructor(
        private readonly stateReposity: StateRepository
    ) {}

    async execute(input:ReadStatesQuery.Input): Promise<ReadStatesQuery.Output> {
        const { code } = input

        const states = await this.stateReposity.find({code});

        return states.map((state) => {
            return {
                id: state.getState().id,
                nome: state.getState().name,
                code: state.getState().code,
                isActive: state.getState().isActive,
            }
        })

    }
}

export namespace ReadStatesQuery {
    export type Input = {
        code: string;
    }

    export type Output = {
        id: string;
        nome: string;
        codigo: string;
        isActive: boolean;
    }
}
