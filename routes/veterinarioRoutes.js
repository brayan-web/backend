import  express  from "express";
const router = express.Router();

import { registrar, perfil, confirmar, autenticar, olvidePassword, comprobarToken, nuevoPassword } from "../controllers/veterinarioController.js"
import checkAuth from "../middleware/authMiddleware.js";



router.post('/', registrar);
router.get('/confirmar/:token', confirmar);
router.post('/login', autenticar);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);
router.post('/olvide-password/:token', nuevoPassword);



router.get('/perfil', checkAuth, perfil);



export default router;