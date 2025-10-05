import type { Model } from "mongoose";
import { mongoose } from "./mongodb";
import { RegionSchema, type RegionType } from "../models/region.dto";

const RegionModel: Model<RegionType> = mongoose.models.Regiao || mongoose.model<RegionType>("Regiao", RegionSchema);

export const RegionRepository = {
  async findAll(): Promise<RegionType[]> {
    const estados: RegionType[] = await RegionModel.find()
    return estados
  },
  async findByName(nome: string): Promise<RegionType | null> {
    const estado: RegionType | null = await RegionModel.findOne({ nome })
    return estado
  },
  async findByAcronym(sigla: string): Promise<RegionType | null> {
    const estado: RegionType | null = await RegionModel.findOne({sigla})
    return estado
  },
};
