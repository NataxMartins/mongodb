import { type RegionType } from "../models/region.dto";
import type { Request, Response } from 'express';
import { RegionService } from "../services/region.service";

export const RegionController = {
  getAll: async (req: Request, res: Response) => {
      let regioes: RegionType[]

      try {
        regioes = await RegionService.findAll()
      } catch (e) {
        console.error(e)
        return res.status(500).json({message: "Ocorreu um erro ao buscar as regioes", error: e})
      }
    
      if (regioes.length == 0) {
        return res.status(204).json(regioes)
      }
    
      return res.status(200).json(regioes)
  },

  getByName: async (req: Request, res:Response) => {
    const nome = req.params.nome;

    if (!nome) return res.status(400).json({message: "Nome da regiao não fornecido"})

    let regiao: RegionType | null

    try {
      regiao = await RegionService.findByName(nome)
    } catch (e) {
      console.error(e)
      return res.status(500).json({message: "Ocorrreu um erro ao buscar a regiao", error: e})
    }
  
    if (!regiao) return res.status(404).json({message: "regiao não encontrada", regiao})
    
    return res.status(200).json(regiao);
  },
  getByAcronym: async (req: Request, res: Response) => {
    const sigla = req.params.sigla

    if (!sigla) return res.status(400).json({message: "Sigla da regiao não fornecida"})

    let regiao: RegionType | null

    try {
      regiao = await RegionService.findByAcronym(sigla)
    } catch (e) {
      console.error(e)
      return res.status(500).json({message: "Ocorreu um erro ao buscar a regiao", error: e})
    }

    if (!regiao) return res.status(404).json({message: "regiao não encontrada", regiao})

    return res.status(200).json(regiao)
  },
}