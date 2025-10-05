import { type StateType } from "../models/state.dto";
import { StateRepository } from "../database/state.repository";

export const StateService = {
  async findAll(): Promise<StateType[]> {
    return await StateRepository.findAll();
  },

  async findByAcronym(nome: string): Promise<StateType | null> {
    return await StateRepository.findByAcronym(nome);
  }
};