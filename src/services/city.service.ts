import { type CityType } from "../models/city.dto";
import { CityRepository } from "../database/city.repository";

export const CityService = {
  async findAll(): Promise<CityType[]> {
    return await CityRepository.findAll();
  },

  async findByName(nome: string): Promise<CityType | null> {
    return await CityRepository.findByName(nome);
  },

  async findByStateAcronym(sigla: string): Promise<CityType[]> {
    return await CityRepository.findByStateAcronym(sigla)
  }
};