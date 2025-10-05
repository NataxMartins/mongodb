import mongoose, { type InferSchemaType } from "mongoose";
import { RegionSchema } from "./region.dto";

export const StateSchema = new mongoose.Schema({
  sigla: { type: String, required: true },
  nome: { type: String, required: true },
  regiao: { type: RegionSchema, required: true },
});

export type StateType = InferSchemaType<typeof StateSchema>