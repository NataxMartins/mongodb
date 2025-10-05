import mongoose, { type InferSchemaType } from "mongoose";

export const RegionSchema = new mongoose.Schema({
  sigla: { type: String, required: true },
  nome: { type: String, required: true },
});

export type RegionType = InferSchemaType<typeof RegionSchema>