import express from "express";
import db from "./config/database.js";
import { router, routerVoto, routerRanking, routerUsuario } from "./routes/index.js";
import cors from "cors";
 
const app = express();
try {
    await db.authenticate();
    console.log('Database connected...');
} catch (error) {
    console.error('Connection error:', error);
}

app.use(cors());
app.use(express.json());
app.use('/restaurante', router);
app.use('/VotarRestaurante', routerVoto);
app.use('/ranking', routerRanking);
//app.use('/RestauranteVencedor', routerVoto);
app.use('/usuario', routerUsuario);

app.listen(5000, () => console.log('Server running at port 5000'));