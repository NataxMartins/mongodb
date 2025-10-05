import { Router } from 'express';
import { CityController } from '../controllers/city.controller';

const router = Router()

router.get("/cidades", CityController.getAll)

router.get("/cidades/:nome", CityController.getByName)

export default router