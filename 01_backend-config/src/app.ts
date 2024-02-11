import { Middlewares, Routes, Listen } from "./services";
import { onConsoleClear } from "./utils";


onConsoleClear();

Middlewares()
Routes()
Listen('Server running on: ', 8000);






