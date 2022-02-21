import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Usuarios = db.define('usuarios',{
    id_usuario: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    cpf:{
        type: DataTypes.INTEGER,
        allowNull:false
    },
    nome:{
        type: DataTypes.STRING,
        allowNull:false,
    },
},{
    freezeTableName: true
});

export default Usuarios;