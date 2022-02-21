import { Sequelize } from "sequelize";
import Usuarios from "../models/usuariosModel.js";
 
export const getAllUsuarios = async (req, res) => {
    try {
        const usuario = await Usuarios.findAll();
        res.json(usuario);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getUsuarioById = async (req, res) => {
    try {
        const usuario = await Usuarios.findAll({
            where: {
                id_usuario: req.params.id_usuario
            }
        });
        res.json(usuario[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const createUsuario = async (req, res) => {
    try {
        await Usuarios.create(req.body);
        res.json({
            "message": "Usuario Cadastrado"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 

export const checkUsuario = async (req, res) => {
        Usuarios.findOne({
            where: {
                cpf: req.params.cpf
            }
        })
        res.json("Usuário já votou")
    };