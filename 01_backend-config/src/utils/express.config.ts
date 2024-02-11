import { NextFunction, Request, Response } from "express";


export function onRequestExpress(request: Request) {
    return request;
}

export function onResponseExpress(response: Response) {
    return response;
}

export function onNextFunctionExpress(next: NextFunction) {
    return next();
}

export function onExpressHandler(request: Request, response: Response, next: NextFunction) {

    return { request, response, next };

}