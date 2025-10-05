import { type StateType } from "../models/state.dto";
import type { Request, Response } from 'express';
import { StateService } from "../services/state.service";
import { CityType } from "src/models/city.dto";
import { CityService } from "../services/city.service";

export const StateController = {
  getAll: async (req: Request, res: Response) => {
      let estados: StateType[]

      try {
        estados = await StateService.findAll()
      } catch (e) {
        console.error(e)
        return res.status(500).json({message: "Ocorreu um erro ao buscar as estados", error: e})
      }
    
      if (estados.length == 0) {
        return res.status(204).json(estados)
      }
    
      return res.status(200).json(estados)
  },
  
  getByAcronym: async (req: Request, res: Response) => {
    const sigla = req.params.sigla

    if (!sigla) return res.status(400).json({message: "Sigla do estado não fornecida"})

    let estado: StateType | null

    try {
      estado = await StateService.findByAcronym(sigla)
    } catch (e) {
      console.error(e)
      return res.status(500).json({message: "Ocorreu um erro ao buscar o estado", error: e})
    }

    if (!estado) return res.status(404).json({message: "estado não encontrado", estado})

    return res.status(200).json(estado)
  },

  getCitiesByUF: async (req: Request, res: Response) => {
    const sigla = req.params.sigla!

    let cidades: CityType[]

    try {
      cidades = await CityService.findByStateAcronym(sigla)
    } catch (e) {
      console.error(e)
      return res.status(500).json({message: "Ocorreu um erro ao buscar todas as cidades para este estado", error: e})
    }

    if (cidades.length === 0) return res.status(204).json(cidades)

    return res.status(200).json(cidades)

  }
}