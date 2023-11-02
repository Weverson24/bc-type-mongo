require("dotenv").config();
// onde vai ficar minhas senhas ou infirmaçoes que são seguras

import express from 'express';// criação de rotas

import config from 'config';// Onde vai ficar algumas informações importantes

import router from './router';// Onde serar adm as rotas
import db from '../config/db';// Onde vai ficar o banco de dados.
import logger from '../config/logger';// aqui serve como um console.log mais avançado vamos assim dizer.

import morganMiddleware from './middeware/morganMiddleware';//gerenciar meus middleware


const app = express();

app.use(morganMiddleware)
app.use(express.json());
app.use("/api/", router)


const port = config.get<number>("port")

app.listen(port, async () => {
    await db()
    logger.info(`Servidor rodando na porta ${port}`)
})