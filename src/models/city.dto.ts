import mongoose, { type InferSchemaType } from "mongoose";
import { StateSchema } from "./state.dto";

export const CitySchema = new mongoose.Schema({
  nome: { type: String, required: true },
  UF: { type: StateSchema, required: true },
});

export type CityType = InferSchemaType<typeof CitySchema>