import { Sequelize } from "sequelize";
 
const db = new Sequelize('desafio', 'root', '1234', {
    host: "localhost",
    dialect: "mysql"
});
 
db.sync().then(() => {
    console.log("Drop and re-sync db.");
  });

export default db;