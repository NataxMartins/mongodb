import { Router } from 'express';
import { StateController } from '../controllers/state.controller';

const router = Router()

router.get("/estados", StateController.getAll)

router.get("/estados/:sigla", StateController.getByAcronym);

router.get("/estados/:sigla/cidades", StateController.getCitiesByUF);

export default router