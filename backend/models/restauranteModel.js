import { Sequelize } from "sequelize";
import db from "../config/database.js";
 
const { DataTypes } = Sequelize;
 
const Restaurante = db.define('restaurantes',{
    idRest: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    restnome:{
        type: DataTypes.STRING,
        allowNull:false
    },
    votos:{
        type: DataTypes.INTEGER,
        allowNull:false,
        defaultValue:0
    },
},{
    freezeTableName: true
});

export default Restaurante;