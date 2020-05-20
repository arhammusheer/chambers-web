import { Request, Response } from 'express'

const loggerMiddleware = (req: Request, resp: Response, next) => {

    console.log('Req:', req.method, req.path)
    next()
}

export default loggerMiddleware