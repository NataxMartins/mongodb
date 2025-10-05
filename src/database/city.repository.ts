import { type CityType, CitySchema } from "../models/city.dto";
import { mongoose } from "./mongodb";

import type { Model } from "mongoose";

const CityModel: Model<CityType> = mongoose.models.Cidade || mongoose.model<CityType>("Cidade", CitySchema);

export const CityRepository = {
  async findAll(): Promise<CityType[]> {
    const cidades: CityType[] = await CityModel.find()
    return cidades
  },
  async findByName(nome: string): Promise<CityType | null> {
    const cidade: CityType | null = await CityModel.findOne({ nome })
    return cidade
  },
  async findByStateAcronym(sigla: string): Promise<CityType[]> {
    const cidades: CityType[] = await CityModel.find({ "UF.sigla": sigla })
    return cidades
  }
};
