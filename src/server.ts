import App from './app'

import * as bodyParser from 'body-parser'
import loggerMiddleware from './middleware/logger'

import HomeController from './controllers/home/home.controller'
import { config } from '../config'

const app = new App({
    port: config.server.port,
    controllers: [
        new HomeController(),
    ],
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true }),
        loggerMiddleware
    ]
})

app.listen()