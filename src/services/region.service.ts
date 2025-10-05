import { type RegionType } from "../models/region.dto";
import { RegionRepository } from "../database/region.repository";

export const RegionService = {
  async findAll(): Promise<RegionType[]> {
    return await RegionRepository.findAll();
  },

  async findByName(nome: string): Promise<RegionType | null> {
    return await RegionRepository.findByName(nome);
  },

  async findByAcronym(nome: string): Promise<RegionType | null> {
    return await RegionRepository.findByAcronym(nome);
  },

};