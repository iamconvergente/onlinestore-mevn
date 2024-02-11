export function onConsoleLog(...data: any | unknown) {
    return console.log(data);
}

export function onConsoleError(...data: any | unknown) {
    return console.error(data);
}

export function onConsoleClear() {
    return console.clear();
}