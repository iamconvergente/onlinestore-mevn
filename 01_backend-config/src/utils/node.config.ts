import * as path from "node:path";


export function onPathResolver(baseURI: string = __dirname, pathURI: string = '') {
    return path.resolve(baseURI, pathURI.toString());
}