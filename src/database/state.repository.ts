import type { Model } from "mongoose";
import { StateSchema, type StateType } from "../models/state.dto";
import { mongoose } from "./mongodb";

const StateModel: Model<StateType> = mongoose.models.Estado || mongoose.model<StateType>("Estado", StateSchema);

export const StateRepository = {
  async findAll(): Promise<StateType[]> {
    const estados: StateType[] = await StateModel.find()
    return estados
  },
  async findByAcronym(sigla: string): Promise<StateType | null> {
    const estado: StateType | null = await StateModel.findOne({sigla})
    return estado
  },
};
