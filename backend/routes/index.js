import express, { Router } from "express";

 
import { 
    getAllRestaurantes,
    createRestaurante,
    getRestauranteById,
    updateRestaurante,
    deleteRestaurante,
    votarRestaurante,
    //getMaisVotado,
} from "../controllers/Restaurantes.js";

import { checkUsuario, 
    createUsuario 
} from "../controllers/Usuario.js";


export const router = express.Router();

router.get('/', getAllRestaurantes);
router.get('/:idRest', getRestauranteById);
router.post('/', createRestaurante);
router.patch('/:idRest', updateRestaurante);
router.delete('/:idRest', deleteRestaurante);

export const routerVoto = express.Router();
routerVoto.post('/:idRest',votarRestaurante );
routerVoto.get('/', votarRestaurante);

export const routerRanking = express.Router();
routerRanking.get('/',getAllRestaurantes)

//export const routerMaisVotado = express.Router();
//routerVoto.get('/', getMaisVotado);

export const routerUsuario = express.Router();
routerUsuario.get('/:cpf', checkUsuario);
routerUsuario.post('/', createUsuario);