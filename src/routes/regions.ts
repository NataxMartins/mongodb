import { Router } from 'express';
import { RegionController } from '../controllers/region.controller';

const router = Router()

router.get("/regioes", RegionController.getAll)

router.get("/regioes/:nome", RegionController.getByName)

router.get("/regioes/:sigla", RegionController.getByAcronym);


export default router