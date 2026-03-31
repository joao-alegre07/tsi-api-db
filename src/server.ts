import express from "express";
import "./db";
import generosRouter from "./routes/generos";
import livrosRouter from "./routes/livros";

const app = express();
const PORT =3000;

app.use(express.json());

app.use("/generos", generosRouter);
app.use("/livros", livrosRouter);

app.listen(PORT, () => {
    console.log(`Servidor executando em localhost:${PORT}`)
});

