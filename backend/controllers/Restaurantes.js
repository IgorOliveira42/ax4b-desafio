import Restaurante from "../models/restauranteModel.js";
import { Sequelize } from "sequelize";
 
export const getAllRestaurantes = async (req, res) => {
    try {
        const restaurante = await Restaurante.findAll();
        res.json(restaurante);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getRestauranteById = async (req, res) => {
    try {
        const restaurante = await Restaurante.findAll({
            where: {
                idRest: req.params.idRest
            }
        });
        res.json(restaurante[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createRestaurante = async (req, res) => {
    try {
        await Restaurante.create(req.body);
        res.json({
            "message": "Restaurante Cadastrado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateRestaurante = async (req, res) => {
    try {
        await Restaurante.update(req.body, {
            where: {
                idRest: req.params.idRest
            }
        });
        res.json({
            "message": "Restaurante Atualizado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const deleteRestaurante = async (req, res) => {
    try {
        await Restaurante.destroy({
            where: {
                idRest: req.params.idRest
            }
        });
        res.json({
            "message": "Restaurante Removido"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}


export const votarRestaurante = async (req, res) => {
    try {
        await Restaurante.findOne({
            where: {
                idRest: req.params.idRest
            }
        }).then (option => {
            return option.increment('votos')
        }).then (option => {
            return option.reload();
        }).then(option => {
            res.json({
                "message": "Restaurante Atualizado"
            });
        })
        
    } catch (error) {
        res.json({ message: error.message });
    }  
}

 /*
export const getMaisVotado = async (req, res) => {
    try {
        const restaurante = await Restaurante.findAll( 
            {attributes: [
            Sequelize.fn('max', Sequelize.col('votos'))
         ]});
        res.json(restaurante[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}

*/