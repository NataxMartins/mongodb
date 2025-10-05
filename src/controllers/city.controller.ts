import { type CityType } from "../models/city.dto";
import type { Request, Response } from 'express';
import { CityService } from "../services/city.service";

export const CityController = {
  getAll: async (req: Request, res: Response) => {
      let cidades: CityType[]

      try {
        cidades = await CityService.findAll()
      } catch (e) {
        console.error(e)
        return res.status(500).json({message: "Ocorreu um erro ao buscar as cidades", error: e})
      }
    
      if (cidades.length == 0) {
        return res.status(204).json(cidades)
      }
    
      return res.status(200).json(cidades)
  },

  getByName: async (req: Request, res:Response) => {
    const nome = req.params.nome;

    if (!nome) return res.status(400).json({message: "Nome da cidade não encontrado"})

    let cidade: CityType | null

    try {
      cidade = await CityService.findByName(nome)
    } catch (e) {
      console.error(e)
      return res.status(500).json({message: "Ocorrreu um erro ao buscar a cidade", error: e})
    }
  
    if (!cidade) return res.status(404).json({message: "Cidade não encontrada", cidade})
    
    return res.status(200).json(cidade);
  }
}