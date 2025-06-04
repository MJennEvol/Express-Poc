import "dotenv/config"
import express from "express";
import cors from "cors"
const PORT = process.env.PORT || 3002;

console.log("Iniciando servidor...");

const app = express();
app.use(cors());

app.listen(PORT, () => {
    console.log(`🚀 Servidor listo en http://localhost:${PORT}`);
});