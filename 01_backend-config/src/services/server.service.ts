import { HOSTNAME, PORT } from "../settings";
import { onConsoleLog, onPathResolver, onRequestExpress, onResponseExpress } from "../utils";
import { Application, Request, Response, Router } from "express";
import express = require('express');

// Settings
const SERVER: Application = express()
const NODE_PORT: string | number = PORT || 8000;
const NODE_HOSTNAME: string | undefined = HOSTNAME;

export function Middlewares() {
    return {
        expressJSON: SERVER.use(express.json()),
        expressURLEncoded: SERVER.use(express.urlencoded({ extended: true })),
        expressStaticDirs: SERVER.use(express.static(onPathResolver(__dirname, 'public')))
    }
}


export function Routes() {
    let router: express.Router = Router();

    router.get('/', (onRequestExpress, onResponseExpress) => {
        onResponseExpress.json('App is Loaded')
    })
}

export function Listen(msg: string, port: string | number = NODE_PORT) {
    return onConsoleLog(`${msg}: ${NODE_HOSTNAME}:${port}`);
}











