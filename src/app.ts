import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
const PORT = process.env.PORT || 3002;
import db from "./config/mongo";
console.log("Iniciando servidor...");

const app = express();
app.use(cors());
//recie jsons
app.use(express.json());

app.use(router);
db().then(() => console.log("Conexión ready"));

app.listen(PORT, () => {
  console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});
