import { Router } from 'express';
import cidadeRoutes from './cities';
import estadosRoutes from './states';
import regioesRoutes from './regions'

const router = Router();

router.use(cidadeRoutes);

router.use(estadosRoutes);

router.use(regioesRoutes)

export default router;